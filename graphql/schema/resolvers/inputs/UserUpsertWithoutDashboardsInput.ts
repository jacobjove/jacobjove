import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutDashboardsInput } from "../inputs/UserCreateWithoutDashboardsInput";
import { UserUpdateWithoutDashboardsInput } from "../inputs/UserUpdateWithoutDashboardsInput";

@TypeGraphQL.InputType("UserUpsertWithoutDashboardsInput", {
  isAbstract: true,
})
export class UserUpsertWithoutDashboardsInput {
  @TypeGraphQL.Field(() => UserUpdateWithoutDashboardsInput, { nullable: false })
  update!: UserUpdateWithoutDashboardsInput;

  @TypeGraphQL.Field(() => UserCreateWithoutDashboardsInput, { nullable: false })
  create!: UserCreateWithoutDashboardsInput;
}
