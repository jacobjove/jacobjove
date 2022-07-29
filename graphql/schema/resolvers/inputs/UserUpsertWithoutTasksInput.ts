import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "../inputs/UserUpdateWithoutTasksInput";

@TypeGraphQL.InputType("UserUpsertWithoutTasksInput", {
  isAbstract: true,
})
export class UserUpsertWithoutTasksInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutTasksInput, { nullable: false })
  update!: UserUpdateWithoutTasksInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutTasksInput, { nullable: false })
  create!: UserCreateWithoutTasksInput;
}
