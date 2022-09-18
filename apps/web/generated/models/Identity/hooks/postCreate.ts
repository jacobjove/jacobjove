/* Edit this file to add a non-default post-save hook for the Identity type. */

import { Identity } from "@web/generated/interfaces/Identity";
import IdentityModel from "@web/generated/models/Identity";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return IdentityModel.create<Identity>({} as Identity);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (identity: Instance) => {
  return _postCreate(identity);
};
