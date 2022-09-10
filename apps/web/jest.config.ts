import nextJest from "next/jest";

// https://nextjs.org/docs/advanced-features/compiler#jest

const createJestConfig = nextJest({ dir: "./" });

// TODO: ... nx / next
const config = {
  displayName: "web",
  preset: "../../jest.preset.js",
  transform: {
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
    // "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../coverage/apps/web",
};

const mergedConfig = createJestConfig(config);

export default mergedConfig;
