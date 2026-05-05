import archiver from 'archiver';
import fs from 'fs';
import path from 'path';
const output = fs.createWriteStream('package.zip');
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
  'README_zh_CN.md',
  'README_zh_CHT.md',
  'icon.png',
  'preview.png'
];
for (const file of files) {
  if (fs.existsSync(file)) {
    archive.file(file, { name: file });
    console.log(`Added: ${file}`);
  } else {
    console.warn(`Warning: ${file} not found, skipping.`);
  }
}
archive.finalize();
