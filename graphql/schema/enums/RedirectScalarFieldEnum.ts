import * as TypeGraphQL from "type-graphql-v2-fork";

export enum RedirectScalarFieldEnum {
  id = "id",
  old_path = "old_path",
  new_path = "new_path",
}
TypeGraphQL.registerEnumType(RedirectScalarFieldEnum, {
  name: "RedirectScalarFieldEnum",
  description: undefined,
});
