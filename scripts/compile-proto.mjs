/**
 * Compiles proto files to JavaScript + TypeScript declarations.
 *
 * Output files (committed to source control):
 *   src/proto/generated.js   – ES6 static module
 *   src/proto/generated.d.ts – TypeScript declarations
 *
 * Usage:  pnpm proto
 */

import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const protoSrc = join(root, 'src', 'proto');

const protoFiles = [
  'header.proto',
  'point_cloud.proto',
  'ros_message_wrapper.proto',
].map((f) => `"${join(protoSrc, f)}"`).join(' ');

const outJs = join(protoSrc, 'generated.js');
const outDts = join(protoSrc, 'generated.d.ts');

// On Windows the bin shims have a .cmd extension.
const ext = process.platform === 'win32' ? '.cmd' : '';
const pbjs = join(root, 'node_modules', '.bin', `pbjs${ext}`);
const pbts = join(root, 'node_modules', '.bin', `pbts${ext}`);

console.log('Compiling proto files...');

execSync(
  `"${pbjs}" -t static-module -w es6 --es6 -o "${outJs}" ${protoFiles}`,
  { stdio: 'inherit' }
);

execSync(
  `"${pbts}" -o "${outDts}" "${outJs}"`,
  { stdio: 'inherit' }
);

console.log('Done.');
console.log(' ', outJs);
console.log(' ', outDts);
