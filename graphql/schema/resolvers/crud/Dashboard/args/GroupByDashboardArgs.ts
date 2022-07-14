import * as TypeGraphQL from "type-graphql";
import { DashboardScalarFieldEnum } from "../../../../enums/DashboardScalarFieldEnum";
import { DashboardOrderByWithAggregationInput } from "../../../inputs/DashboardOrderByWithAggregationInput";
import { DashboardScalarWhereWithAggregatesInput } from "../../../inputs/DashboardScalarWhereWithAggregatesInput";
import { DashboardWhereInput } from "../../../inputs/DashboardWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByDashboardArgs {
  @TypeGraphQL.Field((_type) => DashboardWhereInput, {
    nullable: true,
  })
  where?: DashboardWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [DashboardOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: DashboardOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "name"
    | "userId"
    | "layouts"
    | "isDefault"
    | "isPublic"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => DashboardScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: DashboardScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
