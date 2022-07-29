import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutHabitsInput } from "../inputs/UserCreateWithoutHabitsInput";
import { UserUpdateWithoutHabitsInput } from "../inputs/UserUpdateWithoutHabitsInput";

@TypeGraphQL.InputType("UserUpsertWithoutHabitsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutHabitsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutHabitsInput, { nullable: false })
  update!: UserUpdateWithoutHabitsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutHabitsInput, { nullable: false })
  create!: UserCreateWithoutHabitsInput;
}
