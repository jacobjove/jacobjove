import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateOrConnectWithoutDashboardsInput } from "../inputs/UserCreateOrConnectWithoutDashboardsInput";
import { UserCreateWithoutDashboardsInput } from "../inputs/UserCreateWithoutDashboardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutDashboardsInput", {
  isAbstract: true,
})
export class UserCreateNestedOneWithoutDashboardsInput {
  @TypeGraphQL.Field(() => UserCreateWithoutDashboardsInput, { nullable: true })
  create?: UserCreateWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field(() => UserCreateOrConnectWithoutDashboardsInput, { nullable: true })
  connectOrCreate?: UserCreateOrConnectWithoutDashboardsInput | undefined;

  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: true })
  connect?: UserWhereUniqueInput | undefined;
}
