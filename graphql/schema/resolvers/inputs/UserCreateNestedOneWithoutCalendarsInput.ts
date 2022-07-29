import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutCalendarsInput } from "../inputs/UserCreateOrConnectWithoutCalendarsInput";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutCalendarsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutCalendarsInput, { nullable: true })
  create?: UserCreateWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutCalendarsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
