import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateWithoutUserInput } from "../inputs/DashboardCreateWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class DashboardCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => DashboardWhereUniqueInput, { nullable: false })
  where!: DashboardWhereUniqueInput;

  @TypeGraphQL.Field(() => DashboardCreateWithoutUserInput, { nullable: false })
  create!: DashboardCreateWithoutUserInput;
}
