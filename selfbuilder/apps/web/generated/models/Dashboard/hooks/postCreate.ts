/* Edit this file to add a non-default post-save hook for the Dashboard type. */

import { Dashboard } from "@web/generated/interfaces/Dashboard";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (dashboard: Dashboard) => {
  return _postCreate(dashboard);
};
