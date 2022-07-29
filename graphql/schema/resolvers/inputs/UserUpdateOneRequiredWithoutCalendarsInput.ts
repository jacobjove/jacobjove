import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutCalendarsInput } from "../inputs/UserCreateOrConnectWithoutCalendarsInput";
import { UserCreateWithoutCalendarsInput } from "../inputs/UserCreateWithoutCalendarsInput";
import { UserUpdateWithoutCalendarsInput } from "../inputs/UserUpdateWithoutCalendarsInput";
import { UserUpsertWithoutCalendarsInput } from "../inputs/UserUpsertWithoutCalendarsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCalendarsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutCalendarsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutCalendarsInput, { nullable: true })
  create?: UserCreateWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutCalendarsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutCalendarsInput, { nullable: true })
  upsert?: UserUpsertWithoutCalendarsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutCalendarsInput, { nullable: true })
  update?: UserUpdateWithoutCalendarsInput | undefined;
}
