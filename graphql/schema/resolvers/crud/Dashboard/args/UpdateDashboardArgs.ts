import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardUpdateInput } from "../../../inputs/DashboardUpdateInput";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDashboardArgs {
  @TypeGraphQL.Field(() => DashboardUpdateInput, { nullable: false })
  data!: DashboardUpdateInput;

  @TypeGraphQL.Field(() => DashboardWhereUniqueInput, { nullable: false })
  where!: DashboardWhereUniqueInput;
}
