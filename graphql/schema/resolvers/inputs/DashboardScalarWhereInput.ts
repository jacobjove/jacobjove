import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("DashboardScalarWhereInput", {
  isAbstract: true,
})
export class DashboardScalarWhereInput {
  @TypeGraphQL.Field((_type) => [DashboardScalarWhereInput], { nullable: true })
  AND?: DashboardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardScalarWhereInput], { nullable: true })
  OR?: DashboardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardScalarWhereInput], { nullable: true })
  NOT?: DashboardScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => JsonFilter, { nullable: true })
  layouts?: JsonFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  isDefault?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
