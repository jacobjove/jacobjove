import * as TypeGraphQL from "type-graphql-v2-fork";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class IdentityCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => IdentityWhereUniqueInput, { nullable: false })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field(() => IdentityCreateWithoutUserInput, { nullable: false })
  create!: IdentityCreateWithoutUserInput;
}
