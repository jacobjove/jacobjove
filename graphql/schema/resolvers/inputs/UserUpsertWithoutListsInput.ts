import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutListsInput } from "../inputs/UserCreateWithoutListsInput";
import { UserUpdateWithoutListsInput } from "../inputs/UserUpdateWithoutListsInput";

@TypeGraphQL.InputType("UserUpsertWithoutListsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutListsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutListsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutListsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutListsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutListsInput;
}
