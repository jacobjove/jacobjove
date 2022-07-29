import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("TaskScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class TaskScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  AND?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  OR?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: TaskScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  title?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  description?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  plannedStartDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  dueDate?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableWithAggregatesFilter, { nullable: true })
  parentId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  habitId?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  rank?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  completedAt?: DateTimeNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
