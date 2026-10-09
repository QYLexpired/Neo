import archiver from 'archiver';
import { createWriteStream, rmSync, statSync } from 'fs';
import { dirname, resolve } from 'path';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const files = [
  'theme.css',
  'theme.json',
  'README.md',
  'README.zh-CN.md',
  'README.zh-TW.md',
  'icon.png',
  'preview.png',
  'assets/neo-fonts.ttf'
];
const packagePath = resolve(root, 'package.zip');
async function createPackage() {
  const entries = files.map((file) => {
    const fullPath = resolve(root, file);
    const entry = statSync(fullPath, { throwIfNoEntry: false });
    if (!entry || (!entry.isFile() && !entry.isDirectory())) {
      throw new Error(`Required package file not found: ${file}`);
    }
    return { file, fullPath, isDirectory: entry.isDirectory() };
  });
  rmSync(packagePath, { force: true });
  const output = createWriteStream(packagePath);
  const archive = archiver('zip', { zlib: { level: 9 } });
  const completed = pipeline(archive, output);
  archive.on('warning', (error) => archive.destroy(error));
  try {
    for (const { file, fullPath, isDirectory } of entries) {
      if (isDirectory) {
        archive.directory(fullPath, file);
      } else {
        archive.file(fullPath, { name: file });
      }
    }
    await Promise.all([archive.finalize(), completed]);
    console.log(`Created package.zip (${archive.pointer()} bytes)`);
  } catch (error) {
    archive.abort();
    output.destroy();
    await completed.catch(() => {});
    rmSync(packagePath, { force: true });
    throw error;
  }
}
createPackage().catch((error) => {
  console.error(`Package failed: ${error.message}`);
  process.exitCode = 1;
});
