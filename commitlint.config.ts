import rules from "@commitlint/config-conventional";
import type { UserConfig } from "@commitlint/types";

// https://commitlint.js.org/reference/configuration.html
const configuration: UserConfig = {
  /*
   * Resolve and load @commitlint/config-conventional from node_modules.
   * Referenced packages must be installed
   */
  ...rules,
};

export default configuration;
