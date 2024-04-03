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
    'prettier-plugin-multiline-arrays', // TODO: enable when it stops erroring ... currently 2.0.0
    'prettier-plugin-packagejson',
  ],
  // Plugin options
  // TODO: reenable after updating
  multilineArraysWrapThreshold: 3,
};

export default config;
