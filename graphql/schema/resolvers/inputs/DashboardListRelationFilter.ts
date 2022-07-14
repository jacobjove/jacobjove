import * as TypeGraphQL from "type-graphql";
import { DashboardWhereInput } from "../inputs/DashboardWhereInput";

@TypeGraphQL.InputType("DashboardListRelationFilter", {
  isAbstract: true,
})
export class DashboardListRelationFilter {
  @TypeGraphQL.Field((_type) => DashboardWhereInput, {
    nullable: true,
  })
  every?: DashboardWhereInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardWhereInput, {
    nullable: true,
  })
  some?: DashboardWhereInput | undefined;

  @TypeGraphQL.Field((_type) => DashboardWhereInput, {
    nullable: true,
  })
  none?: DashboardWhereInput | undefined;
}
