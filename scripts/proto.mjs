/**
 * Mirrors the ax_msgs proto definitions into this package and regenerates the
 * compiled bindings, so a compile never runs against a stale copy.
 *
 * The protos are authored in the ax_msgs ROS package and this package only
 * mirrors them; generated.{js,d.ts} are committed. `pnpm proto` copies the
 * upstream tree over first, then recompiles.
 *
 * Usage:
 *   pnpm proto                mirror the sources, then recompile
 *   pnpm proto --check        report drift only; exits 1, writes nothing (for CI)
 *   pnpm proto --from <dir>   read the protos from another checkout
 *
 * The source defaults to $AXBOT_PROTO_SRC, else DEFAULT_SOURCE below.
 */

import { execSync } from 'child_process';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, realpathSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const root = join(scriptDir, '..');
const protoSrcDir = join(root, 'src', 'proto');

const DEFAULT_SOURCE = '/home/simba/ax/build_all/src/ax_msgs/ax_msgs/proto';

/** Compiler output, committed and therefore also checked against a fresh compile. */
const GENERATED_FILES = ['generated.js', 'generated.d.ts'];

// On Windows the bin shims have a .cmd extension.
const ext = process.platform === 'win32' ? '.cmd' : '';
const pbjs = join(root, 'node_modules', '.bin', `pbjs${ext}`);
const pbts = join(root, 'node_modules', '.bin', `pbts${ext}`);

function parseArgs(argv) {
  const explicit = Boolean(process.env.AXBOT_PROTO_SRC);
  const options = { check: false, source: process.env.AXBOT_PROTO_SRC || DEFAULT_SOURCE, explicit };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === '--check') {
      options.check = true;
    } else if (arg === '--from') {
      const value = argv[index + 1];
      if (!value) throw new Error('--from needs a directory');
      options.source = value;
      options.explicit = true;
      index += 1;
    } else {
      throw new Error(`Unknown argument: ${arg}`);
    }
  }
  return options;
}

/** `.proto` paths relative to `dir`, so the source and the copy compare by the same key. */
function collectProtos(dir) {
  return readdirSync(dir, { recursive: true })
    .map((entry) => entry.toString().split('\\').join('/'))
    .filter((entry) => entry.endsWith('.proto'))
    .sort();
}

function diffSources(source, target) {
  const added = [];
  const changed = [];
  const remaining = new Set(collectProtos(target));
  for (const file of collectProtos(source)) {
    if (!remaining.delete(file)) added.push(file);
    else if (!readFileSync(join(source, file)).equals(readFileSync(join(target, file)))) changed.push(file);
  }
  return { added, changed, stale: [...remaining].sort() };
}

/** Runs pbjs + pbts over every `.proto` in `protoSrcDir`. */
function compile({ outJs = join(protoSrcDir, 'generated.js'), outDts = join(protoSrcDir, 'generated.d.ts'), quiet = false } = {}) {
  const protoFiles = readdirSync(protoSrcDir, { recursive: true })
    .filter((file) => file.endsWith('.proto'))
    .map((file) => `"${join(protoSrcDir, file)}"`)
    .join(' ');

  if (!quiet) console.log('Compiling proto files...');
  const stdio = quiet ? 'pipe' : 'inherit';
  execSync(`"${pbjs}" -p "${protoSrcDir}" -t static-module -w es6 --es6 --keep-case -o "${outJs}" ${protoFiles}`, { stdio });
  execSync(`"${pbts}" -o "${outDts}" "${outJs}"`, { stdio });
  if (!quiet) {
    console.log('Done.');
    console.log(' ', outJs);
    console.log(' ', outDts);
  }
}

/** Compiles into a scratch directory and returns the committed outputs that would change. */
function diffGenerated() {
  const scratch = mkdtempSync(join(tmpdir(), 'axbot-proto-'));
  try {
    compile({ outJs: join(scratch, 'generated.js'), outDts: join(scratch, 'generated.d.ts'), quiet: true });
    return GENERATED_FILES.filter((file) => !readFileSync(join(scratch, file)).equals(readFileSync(join(protoSrcDir, file))));
  } finally {
    rmSync(scratch, { recursive: true, force: true });
  }
}

function reportDrift(source) {
  const { added, changed, stale } = diffSources(source, protoSrcDir);
  const problems = [
    ...added.map((file) => `missing   ${file}`),
    ...changed.map((file) => `outdated  ${file}`),
    ...stale.map((file) => `unknown   ${file}`),
  ];
  // Stale compiler output is only meaningful once the sources themselves match.
  if (problems.length === 0) {
    try {
      for (const file of diffGenerated()) problems.push(`stale     ${file}`);
    } catch (error) {
      problems.push(`error     compiling for the drift check: ${error.message}`);
    }
  }
  if (problems.length === 0) {
    console.log(`Protos are in sync with ${source}`);
    return;
  }
  console.error(`Proto drift against ${source}:`);
  for (const problem of problems) console.error(`  ${problem}`);
  console.error('Run pnpm proto to mirror the sources and recompile.');
  process.exitCode = 1;
}

function syncAndCompile(source) {
  const { added, changed, stale } = diffSources(source, protoSrcDir);

  for (const file of [...added, ...changed]) {
    const target = join(protoSrcDir, file);
    mkdirSync(dirname(target), { recursive: true });
    cpSync(join(source, file), target);
  }

  console.log(`Synced ${added.length + changed.length} proto file(s) from ${source}`);
  console.log(`  added:   ${added.join(', ') || 'none'}`);
  console.log(`  updated: ${changed.join(', ') || 'none'}`);
  if (stale.length > 0) {
    console.warn(`  unknown: ${stale.join(', ')} — not in the source, left in place`);
  }

  compile();
}

function main({ check, source, explicit }) {
  if (!existsSync(source)) {
    // Without an explicit source the mirror is simply skipped, so the compiler
    // still works on checkouts that do not have the ax_msgs package handy.
    if (check || explicit) {
      console.error(`Proto source directory not found: ${source}`);
      console.error('Pass --from <dir> or set AXBOT_PROTO_SRC.');
      process.exitCode = 1;
      return;
    }
    console.warn(`Proto source directory not found: ${source} — compiling the local copy as-is.`);
    compile();
    return;
  }

  if (check) reportDrift(source);
  else syncAndCompile(source);
}

export { main, compile, diffSources };

/** Runs the CLI only when invoked directly, so the module stays importable. */
function isMain() {
  if (!process.argv[1]) return false;
  try {
    return realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url));
  } catch {
    return false;
  }
}

if (isMain()) {
  let options;
  try {
    options = parseArgs(process.argv.slice(2));
  } catch (error) {
    console.error(error.message);
    console.error('Usage: pnpm proto [--check] [--from <dir>]');
    process.exitCode = 1;
  }
  if (options) main(options);
}
