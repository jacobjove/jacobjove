import * as TypeGraphQL from "type-graphql";
import { IdentityActRelationCreateWithoutActionInput } from "../inputs/IdentityActRelationCreateWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationCreateOrConnectWithoutActionInput", {
  isAbstract: true,
})
export class IdentityActRelationCreateOrConnectWithoutActionInput {
  @TypeGraphQL.Field((_type) => IdentityActRelationWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityActRelationCreateWithoutActionInput, {
    nullable: false,
  })
  create!: IdentityActRelationCreateWithoutActionInput;
}
