/* eslint-disable */
// import nextJest from "next/jest";
import { Config } from "jest";

// https://nextjs.org/docs/advanced-features/compiler#jest
// const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  displayName: "web",
  preset: "../../jest.preset.js",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
    },
  },
  coverageDirectory: "../../coverage/apps/web",
};

// const mergedConfig = createJestConfig(config);

export default config;
// export default mergedConfig;
