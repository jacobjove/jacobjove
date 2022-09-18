/* Edit this file to add a non-default post-save hook for the Value type. */

import { Value } from "@web/generated/interfaces/Value";
import ValueModel from "@web/generated/models/Value";
import { postCreate as _postCreate } from "@web/graphql/schema/helpers";

function create() {
  return ValueModel.create<Value>({} as Value);
}
type Instance = Awaited<ReturnType<typeof create>>;

export const postCreate = async (value: Instance) => {
  return _postCreate(value);
};
