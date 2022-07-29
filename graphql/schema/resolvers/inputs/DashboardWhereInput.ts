import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("DashboardWhereInput", {
  isAbstract: true,
})
export class DashboardWhereInput {
  @TypeGraphQL.Field((_type) => [DashboardWhereInput], { nullable: true })
  AND?: DashboardWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardWhereInput], { nullable: true })
  OR?: DashboardWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardWhereInput], { nullable: true })
  NOT?: DashboardWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;

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
