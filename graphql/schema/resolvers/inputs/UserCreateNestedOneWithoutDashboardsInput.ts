import * as TypeGraphQL from "type-graphql";
import { UserCreateOrConnectWithoutDashboardsInput } from "../inputs/UserCreateOrConnectWithoutDashboardsInput";
import { UserCreateWithoutDashboardsInput } from "../inputs/UserCreateWithoutDashboardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutDashboardsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutDashboardsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutDashboardsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutDashboardsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
