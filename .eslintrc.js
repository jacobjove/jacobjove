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
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  // https://github.com/typescript-eslint/typescript-eslint/tree/main/packages/parser
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "unused-imports", "@nrwl/nx", "@typescript-eslint", "@graphql-eslint"],
  rules: sharedRules,
  // https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
  overrides: [
    {
      files: ["*.test.tsx", "**/*.test.tsx"],
      rules: { "@typescript-eslint/no-non-null-assertion": "off" },
    },
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      plugins: ["react", "@typescript-eslint", "unused-imports"],
      // rules: sharedRules,
      rules: {
        ...sharedRules,
        // https://nx.dev/core-features/enforce-project-boundaries#enforce-project-boundaries
        "@nrwl/nx/enforce-module-boundaries": [
          "error",
          {
            allowCircularSelfDependency: true,
            enforceBuildableLibDependency: true,
            allow: [],
            // https://nx.dev/core-features/enforce-project-boundaries#tags
            depConstraints: [
              {
                sourceTag: "*",
                onlyDependOnLibsWithTags: ["*"],
              },
            ],
          },
        ],
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@nrwl/nx/typescript"],
    },
    {
      files: ["*.js", "*.jsx"],
      extends: ["plugin:@nrwl/nx/javascript"],
    },
    {
      files: ["tsconfig.json"],
      extends: ["plugin:jsonc/recommended-with-jsonc"],
      // TODO: https://ota-meshi.github.io/eslint-plugin-jsonc/rules/sort-keys.html
      rules: {
        "jsonc/sort-keys": [
          "error",
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
  settings: {
    next: {
      rootDir: "apps/web",
    },
  },
};
