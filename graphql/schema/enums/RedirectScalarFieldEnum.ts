import * as TypeGraphQL from "type-graphql";

export enum RedirectScalarFieldEnum {
  id = "id",
  old_path = "old_path",
  new_path = "new_path",
}
TypeGraphQL.registerEnumType(RedirectScalarFieldEnum, {
  name: "RedirectScalarFieldEnum",
  description: undefined,
});
