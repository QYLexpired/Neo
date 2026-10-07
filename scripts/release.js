import { spawnSync } from 'child_process';
import { readFileSync, statSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const repository = 'QYLexpired/Neo';
const manifestFile = 'theme.json';
const packagePath = resolve(root, 'package.zip');
function releaseNotes(version) {
  const changelog = readFileSync(resolve(root, 'CHANGELOG.md'), 'utf8');
  const headings = [...changelog.matchAll(/^###\s+v([^\s/]+)[^\r\n]*(?:\r?\n|$)/gm)];
  const matches = headings.filter((heading) => heading[1] === version);
  if (matches.length !== 1) {
    throw new Error(`CHANGELOG.md 必须包含且只包含一个 v${version} 版本章节。`);
  }
  const heading = matches[0];
  const nextHeading = headings[headings.indexOf(heading) + 1];
  const notes = changelog.slice(heading.index + heading[0].length, nextHeading?.index);
  if (!notes.trim()) {
    throw new Error(`CHANGELOG.md 中 v${version} 的更新说明为空。`);
  }
  return notes;
}
function githubToken() {
  const environmentToken = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  if (environmentToken?.trim()) return environmentToken.trim();
  const credential = spawnSync('git', ['credential', 'fill'], {
    cwd: root,
    encoding: 'utf8',
    input: `protocol=https\nhost=github.com\npath=${repository}.git\n\n`,
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never' }
  });
  const password = credential.status === 0 && credential.stdout.match(/^password=(.+)$/m)?.[1];
  if (password?.trim()) return password.trim();
  const cliToken = spawnSync('gh', ['auth', 'token', '--hostname', 'github.com'], {
    cwd: root,
    encoding: 'utf8'
  });
  if (cliToken.status === 0 && cliToken.stdout.trim()) return cliToken.stdout.trim();
  throw new Error('未找到 GitHub 登录凭据。请先配置 Git 凭据、运行 gh auth login，或设置 GH_TOKEN。');
}
async function publish() {
  const { version } = JSON.parse(readFileSync(resolve(root, manifestFile), 'utf8'));
  if (typeof version !== 'string' || !/^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/.test(version)) {
    throw new Error(`${manifestFile} 的版本号无效，请使用 1.7.1 这样的格式。`);
  }
  const tag = `v${version}`;
  const token = githubToken();
  const releasePath = `/repos/${repository}/releases`;
  async function request(path, method = 'GET', body, contentType = 'application/json') {
    const response = await fetch(new URL(path, 'https://api.github.com'), {
      method,
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'Neo-release',
        'Content-Type': contentType
      },
      body: body === undefined ? undefined : contentType === 'application/json' ? JSON.stringify(body) : body,
      signal: AbortSignal.timeout(180000)
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(`GitHub 请求失败（${response.status}）：${data.message || response.statusText}`);
    }
    return data;
  }
  console.log(`检查 ${repository} 的 ${tag}...`);
  for (let page = 1; ; page++) {
    const releases = await request(`${releasePath}?per_page=100&page=${page}`);
    const existing = releases.find((release) => release.tag_name === tag);
    if (existing) {
      throw new Error(`${tag} 已有${existing.draft ? '草稿' : ''} Release，已停止发布。请先更新 ${manifestFile} 的版本号。\n${existing.html_url}`);
    }
    if (releases.length < 100) break;
  }
  const notes = releaseNotes(version);
  const commit = spawnSync('git', ['rev-parse', 'HEAD'], { cwd: root, encoding: 'utf8' });
  if (commit.status !== 0 || !/^[0-9a-f]{40,64}$/.test(commit.stdout.trim())) {
    throw new Error('无法读取当前 Git 提交，请在项目仓库内发布。');
  }
  console.log('开始执行 npm run package...');
  const npmPath = process.env.npm_execpath;
  const packaged = spawnSync(npmPath ? process.execPath : 'npm', npmPath ? [npmPath, 'run', 'package'] : ['run', 'package'], {
    cwd: root,
    stdio: 'inherit'
  });
  if (packaged.error || packaged.status !== 0) {
    throw new Error('打包失败，已停止发布。');
  }
  const archiveStat = statSync(packagePath, { throwIfNoEntry: false });
  if (!archiveStat?.isFile() || archiveStat.size === 0) {
    throw new Error('打包未生成有效的 package.zip，已停止发布。');
  }
  const archive = readFileSync(packagePath);
  console.log(`创建 ${tag} Release 并上传 package.zip...`);
  const draft = await request(releasePath, 'POST', {
    tag_name: tag,
    target_commitish: commit.stdout.trim(),
    name: tag,
    body: notes,
    draft: true,
    prerelease: version.includes('-')
  });
  try {
    const upload = new URL(draft.upload_url.replace(/\{.*$/, ''));
    upload.searchParams.set('name', 'package.zip');
    await request(upload, 'POST', archive, 'application/zip');
    const release = await request(`${releasePath}/${draft.id}`, 'PATCH', { draft: false, make_latest: 'legacy' });
    console.log(`发布成功：${release.html_url}`);
  } catch (error) {
    console.error(`发布未完成，请检查本次 Release 草稿：${draft.html_url}`);
    throw error;
  }
}
publish().catch((error) => {
  console.error(`发布失败：${error.message}`);
  process.exitCode = 1;
});
