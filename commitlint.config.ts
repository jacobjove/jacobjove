import type { UserConfig } from "@commitlint/types";

// https://commitlint.js.org/#/reference-configuration

const configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
};

export default configuration;
