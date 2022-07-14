import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutDashboardsInput } from "../inputs/UserCreateOrConnectWithoutDashboardsInput";
import { UserCreateWithoutDashboardsInput } from "../inputs/UserCreateWithoutDashboardsInput";
import { UserUpdateWithoutDashboardsInput } from "../inputs/UserUpdateWithoutDashboardsInput";
import { UserUpsertWithoutDashboardsInput } from "../inputs/UserUpsertWithoutDashboardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutDashboardsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutDashboardsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutDashboardsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutDashboardsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutDashboardsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutDashboardsInput, {
    nullable: true,
  })
  update?: UserUpdateWithoutDashboardsInput | undefined;
}
