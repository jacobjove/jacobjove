import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("DashboardScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class DashboardScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [DashboardScalarWhereWithAggregatesInput], { nullable: true })
  AND?: DashboardScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardScalarWhereWithAggregatesInput], { nullable: true })
  OR?: DashboardScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: DashboardScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => JsonWithAggregatesFilter, { nullable: true })
  layouts?: JsonWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolWithAggregatesFilter, { nullable: true })
  isDefault?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolWithAggregatesFilter, { nullable: true })
  isPublic?: BoolWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
