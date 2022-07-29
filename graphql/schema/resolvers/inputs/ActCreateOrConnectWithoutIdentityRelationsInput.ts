import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActCreateWithoutIdentityRelationsInput } from "../inputs/ActCreateWithoutIdentityRelationsInput";
import { ActWhereUniqueInput } from "../inputs/ActWhereUniqueInput";

@TypeGraphQL.InputType("ActCreateOrConnectWithoutIdentityRelationsInput", {
  isAbstract: true,
})
export class ActCreateOrConnectWithoutIdentityRelationsInput {
  @TypeGraphQL.Field(() => ActWhereUniqueInput, { nullable: false })
  where!: ActWhereUniqueInput;

  @TypeGraphQL.Field(() => ActCreateWithoutIdentityRelationsInput, { nullable: false })
  create!: ActCreateWithoutIdentityRelationsInput;
}
