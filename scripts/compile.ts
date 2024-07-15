import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// eslint-disable-next-line ts/naming-convention
const __filename = fileURLToPath(import.meta.url);
// eslint-disable-next-line ts/naming-convention
const __dirname = dirname(__filename);

const rootDir = resolve(__dirname, '..');

function generateMessages() {
  const messagesDir = `${rootDir}/messages`;
  const paraglideDir = `${rootDir}/paraglide`;
  const inlangDir = `${messagesDir}/jacobjove.inlang`;
  const inlangSettingsFile = `${inlangDir}/settings.json`;
  if (!fs.existsSync(messagesDir)) fs.mkdirSync(messagesDir);
  if (!fs.existsSync(inlangDir)) fs.mkdirSync(inlangDir);
  const inlangSettings = {
    $schema: 'https://inlang.com/schema/project-settings',
    sourceLanguageTag: 'en',
    languageTags: ['en', 'jp', 'ko'],
    modules: [
      'https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-empty-pattern@latest/dist/index.js',
      'https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-missing-translation@latest/dist/index.js',
      'https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-without-source@latest/dist/index.js',
      'https://cdn.jsdelivr.net/npm/@inlang/message-lint-rule-valid-js-identifier@latest/dist/index.js',
      'https://cdn.jsdelivr.net/npm/@inlang/plugin-message-format@latest/dist/index.js',
      'https://cdn.jsdelivr.net/npm/@inlang/plugin-m-function-matcher@latest/dist/index.js',
    ],
    // eslint-disable-next-line ts/naming-convention
    'plugin.inlang.messageFormat': {
      pathPattern: `${rootDir}/messages/{languageTag}.json`,
    },
  };
  fs.writeFileSync(inlangSettingsFile, JSON.stringify(inlangSettings, null, 2));

  const stdout = execSync(`paraglide-js compile --project ${inlangDir} --outdir ${paraglideDir}`);
  console.log(stdout.toString());

  // Remove the .gitignore; we prefer to commit the generated files.
  const gitIgnoreFile = `${paraglideDir}/.gitignore`;
  if (fs.existsSync(gitIgnoreFile)) fs.unlinkSync(gitIgnoreFile);
}

export default function main() {
  generateMessages();
}

main();
