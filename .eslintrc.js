// https://eslint.org/docs/user-guide/configuring/

const rules = {
  "@typescript-eslint/no-explicit-any": "error",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
  ],
  "mui-path-imports/mui-path-imports": "error",
  "no-console": "off",
  // https://mui.com/guides/minimizing-bundle-size/#development-environment
  "no-restricted-imports": [
    "error",
    {
      // https://github.com/mui/material-ui/tree/master/packages/eslint-plugin-material-ui#restricted-path-imports
      patterns: ["@mui/*/*/*", "!@mui/material/test-utils/*"],
    },
  ],
  "no-unused-vars": "off",
  // https://github.com/sweepline/eslint-plugin-unused-imports#react
  // "react/jsx-uses-react": "on",
  // "react/jsx-uses-vars": "on",
  "react/react-in-jsx-scope": ["off"],
  "unused-imports/no-unused-imports": "error",
  "unused-imports/no-unused-vars": [
    "warn",
    { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
  ],
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "@graphql-eslint",
    // https://github.com/kajirikajiri/eslint-plugin-mui-path-imports
    "mui-path-imports",
    "react",
    "unused-imports",
  ],
  rules,
  // https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
  overrides: [
    {
      files: ["*.test.tsx", "**/*.test.tsx"],
      rules: { "@typescript-eslint/no-non-null-assertion": "off" },
    },
    {
      files: ["*.json"],
      extends: ["plugin:jsonc/recommended-with-jsonc"],
      rules: {
        "@typescript-eslint/no-unused-expressions": "off",
      },
    },
    {
      files: ["tsconfig*.json", "package.json"],
      rules: {
        "jsonc/sort-keys": [
          "warn",
          // https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html#options
          {
            pathPattern: ".*", // All properties
            order: {
              type: "asc",
            },
            minKeys: 4,
          },
        ],
      },
    },
  ],
};
