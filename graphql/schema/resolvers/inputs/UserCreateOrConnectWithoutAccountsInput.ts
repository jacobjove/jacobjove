import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutAccountsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutAccountsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutAccountsInput, { nullable: false })
  create!: UserCreateWithoutAccountsInput;
}
