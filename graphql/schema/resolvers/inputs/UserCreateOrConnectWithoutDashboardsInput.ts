import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutDashboardsInput } from "../inputs/UserCreateWithoutDashboardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutDashboardsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutDashboardsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutDashboardsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutDashboardsInput;
}
