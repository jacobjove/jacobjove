import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutCalendarsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutCalendarsInput, { nullable: false })
  create!: UserCreateWithoutCalendarsInput;
}
