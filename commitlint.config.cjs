// import type { UserConfig } from "@commitlint/types";
// https://commitlint.js.org/#/reference-configuration

/**
 * @type {import('@commitlint/types').UserConfig}
 */
const configuration = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  extends: ["@commitlint/config-conventional"],
};

module.exports = configuration;
// export default configuration;
