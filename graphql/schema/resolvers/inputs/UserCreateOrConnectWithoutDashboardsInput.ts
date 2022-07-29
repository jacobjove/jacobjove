import * as TypeGraphQL from "type-graphql-v2-fork";
import { UserCreateWithoutDashboardsInput } from "../inputs/UserCreateWithoutDashboardsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutDashboardsInput", {
  isAbstract: true,
})
export class UserCreateOrConnectWithoutDashboardsInput {
  @TypeGraphQL.Field(() => UserWhereUniqueInput, { nullable: false })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(() => UserCreateWithoutDashboardsInput, { nullable: false })
  create!: UserCreateWithoutDashboardsInput;
}
