module.exports = {
  extends: ["plugin:@nrwl/nx/react", "../../.eslintrc.js"],
  ignorePatterns: ["!**/*", "public", ".cache", "node_modules"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js", "*.jsx"],
      rules: {
        "@typescript-eslint/ban-ts-comment": "off",
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {},
    },
  ],
};
