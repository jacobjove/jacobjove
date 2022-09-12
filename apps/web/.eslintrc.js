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
    {
      files: ["*.ts", "*.tsx"],
      rules: {},
    },
    {
      files: ["*.js", "*.jsx"],
      rules: {},
    },
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
