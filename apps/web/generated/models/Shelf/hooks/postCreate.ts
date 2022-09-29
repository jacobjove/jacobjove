/* Edit this file to add a non-default post-save hook for the Shelf type. */

import { Shelf } from "@web/generated/interfaces/Shelf";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

export const postCreate = async (shelf: Shelf) => {
  return _postCreate(shelf);
};
