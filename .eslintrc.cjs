module.exports = {
  extends: ["next/core-web-vitals", "./.eslintrc.js"],
  ignorePatterns: ["!**/*", ".next/**/*"],
  // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser
  parser: "@typescript-eslint/parser",
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@next/next/no-html-link-for-pages": "error",
      },
    },
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  env: {
    jest: true,
  },
};
