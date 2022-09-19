/* Edit this file to add a non-default post-save hook for the Shelving type. */

import { Shelving } from "@web/generated/interfaces/Shelving";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (shelving: Shelving) => {
  return _postCreate(shelving);
};
