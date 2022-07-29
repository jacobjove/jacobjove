// https://eslint.org/docs/user-guide/configuring/

const sharedRules = {
  // "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_", ignoreRestSiblings: true }],
  // "@typescript-eslint/no-explicit-any": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off",
  "@typescript-eslint/no-unused-vars": [
    "warn",
    { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
  ],
  "no-console": "off",
  // https://mui.com/guides/minimizing-bundle-size/#development-environment
  "no-restricted-imports": [
    "error",
    {
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
  // https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files
  extends: ["eslint:recommended", "next"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "unused-imports"],
  rules: sharedRules,
  // https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
  overrides: [
    {
      files: ["*.ts", "*.tsx", "**/*.ts", "**/*.tsx"],
      extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "next",
      ],
      // https://www.npmjs.com/package/@typescript-eslint/parser
      parser: "@typescript-eslint/parser",
      plugins: ["react", "@typescript-eslint", "unused-imports"],
      rules: sharedRules,
    },
    {
      files: ["*.test.tsx", "**/*.test.tsx"],
      rules: { "@typescript-eslint/no-non-null-assertion": "off" },
    },
    {
      files: ["*.graphql", "*.gql"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      // https://github.com/B2o5T/graphql-eslint/blob/master/docs/README.md
      rules: { "@graphql-eslint/known-type-names": "error" },
      parserOptions: {
        schema: "graphql/schema.gql",
      },
    },
    {
      files: ["*.ts"],
      processor: "@graphql-eslint/graphql",
    },
  ],
};
