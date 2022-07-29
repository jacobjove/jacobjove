import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutIdentityRelationsInput } from "../inputs/ActCreateWithoutIdentityRelationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutIdentityRelationsInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutIdentityRelationsInput {
  @TypeGraphQL.Field((_type) => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActCreateWithoutIdentityRelationsInput, { nullable: false })
  create!: ActCreateWithoutIdentityRelationsInput;
}
