import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutCalendarsInput } from "../inputs/UserCreateOrConnectWithoutCalendarsInput";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserUpdateWithoutCalendarsInput } from "../inputs/UserUpdateWithoutCalendarsInput";
import { UserUpsertWithoutCalendarsInput } from "../inputs/UserUpsertWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutCalendarsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutCalendarsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutCalendarsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutCalendarsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutCalendarsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutCalendarsInput | undefined;
}
