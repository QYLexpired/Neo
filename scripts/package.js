import archiver from 'archiver';
import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const output = fs.createWriteStream(resolve(root, 'package.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });
output.on('close', () => {
  console.log(`Created package.zip (${archive.pointer()} bytes)`);
});
archive.on('error', (err) => {
  throw err;
});
archive.pipe(output);
const files = [
  'theme.css',
  'theme.json',
  'README.md',
  'README.zh-CN.md',
  'README.zh-TW.md',
  'icon.png',
  'preview.png'
];
for (const file of files) {
  const fullPath = resolve(root, file);
  if (fs.existsSync(fullPath)) {
    archive.file(fullPath, { name: file });
    console.log(`Added: ${file}`);
  } else {
    console.warn(`Warning: ${file} not found, skipping.`);
  }
}
archive.finalize();
