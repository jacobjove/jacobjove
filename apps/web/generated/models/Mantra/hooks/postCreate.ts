/* Edit this file to add a non-default post-save hook for the Mantra type. */

import { Mantra } from "@web/generated/interfaces/Mantra";
import MantraModel from "@web/generated/models/Mantra";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return MantraModel.create<Mantra>({} as Mantra);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (mantra: Instance) => {
  return _postCreate(mantra);
};
