import * as TypeGraphQL from "type-graphql";
import { DashboardUpdateInput } from "../../../inputs/DashboardUpdateInput";
import { DashboardWhereUniqueInput } from "../../../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardUpdateInput, {
    nullable: false,
  })
  data!: DashboardUpdateInput;

  @TypeGraphQL.Field((_type) => DashboardWhereUniqueInput, {
    nullable: false,
  })
  where!: DashboardWhereUniqueInput;
}
