import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateInput } from "../inputs/IdentityActRelationCreateInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationCreateOrConnectWithoutIdentityInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateOrConnectWithoutIdentityInput {
  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityActRelationCreateInput, { nullable: false })
  create!: IdentityActRelationCreateInput;
}
