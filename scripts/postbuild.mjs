/**
 * Copies protobuf-generated files from src/proto/ to dist/proto/ after tsc build.
 * These files are generated JS (not TypeScript) so tsc doesn't include them automatically.
 */

import { copyFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const srcDir = join(root, 'src', 'proto');
const dstDir = join(root, 'dist', 'proto');

mkdirSync(dstDir, { recursive: true });

for (const file of ['generated.js', 'generated.d.ts']) {
  copyFileSync(join(srcDir, file), join(dstDir, file));
}

console.log('Copied src/proto/generated.{js,d.ts} → dist/proto/');
