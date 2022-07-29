import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateInput } from "../../../inputs/DashboardCreateInput";
import { DashboardUpdateInput } from "../../../inputs/DashboardUpdateInput";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDashboardArgs {
  @TypeGraphQL.Field(() => DashboardWhereUniqueInput, { nullable: false })
  where!: DashboardWhereUniqueInput;

  @TypeGraphQL.Field(() => DashboardCreateInput, { nullable: false })
  create!: DashboardCreateInput;

  @TypeGraphQL.Field(() => DashboardUpdateInput, { nullable: false })
  update!: DashboardUpdateInput;
}
