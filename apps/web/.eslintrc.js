module.exports = {
  extends: ["plugin:@nrwl/nx/react-typescript", "next/core-web-vitals", "../../.eslintrc.js"],
  ignorePatterns: ["!**/*", ".next/**/*"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@next/next/no-html-link-for-pages": "error",
      },
    },
    // {
    //   files: ["*.graphql", "*.gql"],
    //   parser: "@graphql-eslint/eslint-plugin",
    //   // https://github.com/B2o5T/graphql-eslint/blob/master/docs/README.md
    //   rules: { "@graphql-eslint/known-type-names": "error" },
    //   parserOptions: {
    //     schema: "graphql/schema.gql",
    //   },
    // },
    {
      files: ["*.ts"],
      processor: "@graphql-eslint/graphql",
    },
    // {
    //   files: ["*.ts", "*.tsx"],
    //   rules: {},
    // },
    // {
    //   files: ["*.js", "*.jsx"],
    //   rules: {},
    // },
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
  settings: {
    next: {
      rootDir: "apps/web",
    },
  },
  env: {
    jest: true,
  },
};
