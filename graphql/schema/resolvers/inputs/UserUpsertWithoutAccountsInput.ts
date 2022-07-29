import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutAccountsInput } from "../inputs/UserCreateWithoutAccountsInput";
import { UserUpdateWithoutAccountsInput } from "../inputs/UserUpdateWithoutAccountsInput";

@TypeGraphQL.InputType("UserUpsertWithoutAccountsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutAccountsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutAccountsInput, { nullable: false })
  update!: UserUpdateWithoutAccountsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutAccountsInput, { nullable: false })
  create!: UserCreateWithoutAccountsInput;
}
