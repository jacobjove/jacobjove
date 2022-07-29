import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutListsInput } from "../inputs/UserCreateWithoutListsInput";
import { UserUpdateWithoutListsInput } from "../inputs/UserUpdateWithoutListsInput";

@TypeGraphQL.InputType("UserUpsertWithoutListsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutListsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutListsInput, { nullable: false })
  update!: UserUpdateWithoutListsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutListsInput, { nullable: false })
  create!: UserCreateWithoutListsInput;
}
