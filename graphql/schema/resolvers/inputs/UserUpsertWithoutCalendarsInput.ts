import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserUpdateWithoutCalendarsInput } from "../inputs/UserUpdateWithoutCalendarsInput";

@TypeGraphQL.InputType("UserUpsertWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutCalendarsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutCalendarsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutCalendarsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutCalendarsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutCalendarsInput;
}
