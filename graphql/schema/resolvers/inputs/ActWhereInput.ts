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
  @TypeGraphQL.Field(() => [ActWhereInput], { nullable: true })
  AND?: ActWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActWhereInput], { nullable: true })
  OR?: ActWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [ActWhereInput], { nullable: true })
  NOT?: ActWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  slug?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => BoolFilter, { nullable: true })
  isPublic?: BoolFilter | undefined;

  @TypeGraphQL.Field(() => ActRelationFilter, { nullable: true })
  parent?: ActRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => ActListRelationFilter, { nullable: true })
  variants?: ActListRelationFilter | undefined;

  @TypeGraphQL.Field(() => HabitListRelationFilter, { nullable: true })
  habits?: HabitListRelationFilter | undefined;

  @TypeGraphQL.Field(() => MetricApplicationListRelationFilter, { nullable: true })
  metricApplications?: MetricApplicationListRelationFilter | undefined;

  @TypeGraphQL.Field(() => IdentityActRelationListRelationFilter, { nullable: true })
  identityRelations?: IdentityActRelationListRelationFilter | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateListRelationFilter, { nullable: true })
  scheduleTemplates?: ActionScheduleTemplateListRelationFilter | undefined;

  @TypeGraphQL.Field(() => CategorizationListRelationFilter, { nullable: true })
  categorizations?: CategorizationListRelationFilter | undefined;
}
