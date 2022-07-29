import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutTasksInput } from "../inputs/UserCreateWithoutTasksInput";
import { UserUpdateWithoutTasksInput } from "../inputs/UserUpdateWithoutTasksInput";

@TypeGraphQL.InputType("UserUpsertWithoutTasksInput", {
  isAbstract: true,
})
export class UserUpsertWithoutTasksInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutTasksInput, { nullable: false })
  update!: UserUpdateWithoutTasksInput;

  @TypeGraphQL.Field(() => UserCreateWithoutTasksInput, { nullable: false })
  create!: UserCreateWithoutTasksInput;
}
