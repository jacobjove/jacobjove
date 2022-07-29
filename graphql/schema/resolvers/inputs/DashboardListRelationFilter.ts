import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardWhereInput } from "../inputs/DashboardWhereInput";

@TypeGraphQL.InputType("DashboardListRelationFilter", {
  isAbstract: true,
})
export class DashboardListRelationFilter {
  @TypeGraphQL.Field(() => DashboardWhereInput, { nullable: true })
  every?: DashboardWhereInput | undefined;

  @TypeGraphQL.Field(() => DashboardWhereInput, { nullable: true })
  some?: DashboardWhereInput | undefined;

  @TypeGraphQL.Field(() => DashboardWhereInput, { nullable: true })
  none?: DashboardWhereInput | undefined;
}
