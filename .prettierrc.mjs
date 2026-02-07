// @ts-check

/**
 * @type {import('prettier').Config & { multilineArraysWrapThreshold?: number }}}
 */
const config = {
  // Core options
  bracketSpacing: true,
  endOfLine: 'lf',
  overrides: [],
  printWidth: 98,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-astro',
  ],
};

export default config;
