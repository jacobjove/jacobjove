/* Edit this file to add a non-default post-save hook for the Mantra type. */

import { Mantra } from "@web/generated/interfaces/Mantra";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (mantra: Mantra) => {
  return _postCreate(mantra);
};
