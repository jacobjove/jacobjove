import * as TypeGraphQL from "type-graphql";
import { DashboardCreateInput } from "../../../inputs/DashboardCreateInput";
import { DashboardUpdateInput } from "../../../inputs/DashboardUpdateInput";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardWhereUniqueInput, {
    nullable: false,
  })
  where!: DashboardWhereUniqueInput;

  @TypeGraphQL.Field((_type) => DashboardCreateInput, {
    nullable: false,
  })
  create!: DashboardCreateInput;

  @TypeGraphQL.Field((_type) => DashboardUpdateInput, {
    nullable: false,
  })
  update!: DashboardUpdateInput;
}
