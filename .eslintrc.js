const rules = {
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
  ],
  "mui-path-imports/mui-path-imports": "error",
  "no-restricted-imports": [
    "error",
    {
      // https://github.com/mui/material-ui/tree/master/packages/eslint-plugin-material-ui#restricted-path-imports
      patterns: ["@mui/*/*/*", "!@mui/material/test-utils/*"],
    },
  ],
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": [
    "warn",
    { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
  ],
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    // https://github.com/kajirikajiri/eslint-plugin-mui-path-imports
    "mui-path-imports",
    "unused-imports",
  ],
  rules,
};
