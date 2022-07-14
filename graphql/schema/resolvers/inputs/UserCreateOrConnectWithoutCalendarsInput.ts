import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutCalendarsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutCalendarsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutCalendarsInput;
}
