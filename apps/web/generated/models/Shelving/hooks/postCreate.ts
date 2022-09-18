/* Edit this file to add a non-default post-save hook for the Shelving type. */

import { Shelving } from "@web/generated/interfaces/Shelving";
import ShelvingModel from "@web/generated/models/Shelving";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return ShelvingModel.create<Shelving>({} as Shelving);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (shelving: Instance) => {
  return _postCreate(shelving);
};
