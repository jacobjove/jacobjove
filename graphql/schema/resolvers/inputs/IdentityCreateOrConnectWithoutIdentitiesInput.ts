import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateInput } from "../inputs/IdentityCreateInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateOrConnectWithoutIdentitiesInput", {
  isAbstract: true,
})
export class IdentityCreateOrConnectWithoutIdentitiesInput {
  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityCreateInput, { nullable: false })
  create!: IdentityCreateInput;
}
