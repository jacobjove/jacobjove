import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateListRelationFilter } from "../inputs/ActionScheduleTemplateListRelationFilter";
import { ActListRelationFilter } from "../inputs/ActListRelationFilter";
import { ActRelationFilter } from "../inputs/ActRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CategorizationListRelationFilter } from "../inputs/CategorizationListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitListRelationFilter } from "../inputs/HabitListRelationFilter";
import { IdentityActRelationListRelationFilter } from "../inputs/IdentityActRelationListRelationFilter";
import { MetricApplicationListRelationFilter } from "../inputs/MetricApplicationListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ActWhereInput", {
  isAbstract: true,
})
export class ActWhereInput {
  @TypeGraphQL.Field((_type) => [ActWhereInput], { nullable: true })
  AND?: ActWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActWhereInput], { nullable: true })
  OR?: ActWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActWhereInput], { nullable: true })
  NOT?: ActWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => ActRelationFilter, { nullable: true })
  parent?: ActRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, { nullable: true })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => ActListRelationFilter, { nullable: true })
  variants?: ActListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => HabitListRelationFilter, { nullable: true })
  habits?: HabitListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationListRelationFilter, { nullable: true })
  metricApplications?: MetricApplicationListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => IdentityActRelationListRelationFilter, { nullable: true })
  identityRelations?: IdentityActRelationListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateListRelationFilter, { nullable: true })
  scheduleTemplates?: ActionScheduleTemplateListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CategorizationListRelationFilter, { nullable: true })
  categorizations?: CategorizationListRelationFilter | undefined;
}
