import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateInput } from "../inputs/IdentityCreateInput";
import { IdentityUpdateWithoutIdentitiesInput } from "../inputs/IdentityUpdateWithoutIdentitiesInput";

@TypeGraphQL.InputType("IdentityUpsertWithoutIdentitiesInput", {
  isAbstract: true,
})
export class IdentityUpsertWithoutIdentitiesInput {
  @TypeGraphQL.Field((_type) => IdentityUpdateWithoutIdentitiesInput, { nullable: false })
  update!: IdentityUpdateWithoutIdentitiesInput;

  @TypeGraphQL.Field((_type) => IdentityCreateInput, { nullable: false })
  create!: IdentityCreateInput;
}
