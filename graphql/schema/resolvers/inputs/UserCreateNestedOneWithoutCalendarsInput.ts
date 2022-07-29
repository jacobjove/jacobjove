import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutCalendarsInput } from "../inputs/UserCreateOrConnectWithoutCalendarsInput";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutCalendarsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutCalendarsInput, { nullable: true })
  create?: UserCreateWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutCalendarsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
