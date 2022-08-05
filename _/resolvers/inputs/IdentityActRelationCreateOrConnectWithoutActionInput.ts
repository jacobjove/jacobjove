import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityActRelationCreateWithoutActionInput } from "../inputs/IdentityActRelationCreateWithoutActionInput";
import { IdentityActRelationWhereUniqueInput } from "../inputs/IdentityActRelationWhereUniqueInput";

@TypeGraphQL.InputType("IdentityActRelationCreateOrConnectWithoutActionInput", { isAbstract: true })
export class IdentityActRelationCreateOrConnectWithoutActionInput {
  @TypeGraphQL.Field(() => IdentityActRelationWhereUniqueInput, { nullable: false })
  where!: IdentityActRelationWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityActRelationCreateWithoutActionInput, { nullable: false })
  create!: IdentityActRelationCreateWithoutActionInput;
}
