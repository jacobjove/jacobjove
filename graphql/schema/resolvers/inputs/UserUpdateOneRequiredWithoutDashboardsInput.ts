import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutDashboardsInput } from "../inputs/UserCreateOrConnectWithoutDashboardsInput";
import { UserCreateWithoutDashboardsInput } from "../inputs/UserCreateWithoutDashboardsInput";
import { UserUpdateWithoutDashboardsInput } from "../inputs/UserUpdateWithoutDashboardsInput";
import { UserUpsertWithoutDashboardsInput } from "../inputs/UserUpsertWithoutDashboardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutDashboardsInput", {
  isAbstract: true,
})
export class UserUpdateOneRequiredWithoutDashboardsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutDashboardsInput, { nullable: true })
  create?: UserCreateWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutDashboardsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field(() => UserUpsertWithoutDashboardsInput, { nullable: true })
  upsert?: UserUpsertWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateWithoutDashboardsInput, { nullable: true })
  update?: UserUpdateWithoutDashboardsInput | undefined;
}
