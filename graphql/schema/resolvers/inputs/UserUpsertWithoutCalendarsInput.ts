import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserUpdateWithoutCalendarsInput } from "../inputs/UserUpdateWithoutCalendarsInput";

@TypeGraphQL.InputType("UserUpsertWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutCalendarsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutCalendarsInput, { nullable: false })
  update!: UserUpdateWithoutCalendarsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutCalendarsInput, { nullable: false })
  create!: UserCreateWithoutCalendarsInput;
}
