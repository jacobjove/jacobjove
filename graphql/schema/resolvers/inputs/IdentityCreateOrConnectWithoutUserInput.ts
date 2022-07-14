import * as TypeGraphQL from "type-graphql";
import { IdentityCreateWithoutUserInput } from "../inputs/IdentityCreateWithoutUserInput";
import { IdentityWhereUniqueInput } from "../inputs/IdentityWhereUniqueInput";

@TypeGraphQL.InputType("IdentityCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class IdentityCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => IdentityWhereUniqueInput, {
    nullable: false,
  })
  where!: IdentityWhereUniqueInput;

  @TypeGraphQL.Field((_type) => IdentityCreateWithoutUserInput, {
    nullable: false,
  })
  create!: IdentityCreateWithoutUserInput;
}
