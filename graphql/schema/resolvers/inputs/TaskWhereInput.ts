import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventListRelationFilter } from "../inputs/CalendarEventListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { HabitRelationFilter } from "../inputs/HabitRelationFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";
import { TaskRelationFilter } from "../inputs/TaskRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("TaskWhereInput", {
  isAbstract: true,
})
export class TaskWhereInput {
  @TypeGraphQL.Field(() => [TaskWhereInput], { nullable: true })
  AND?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereInput], { nullable: true })
  OR?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskWhereInput], { nullable: true })
  NOT?: TaskWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  plannedStartDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  dueDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => UserRelationFilter, { nullable: true })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => TaskRelationFilter, { nullable: true })
  parent?: TaskRelationFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => HabitRelationFilter, { nullable: true })
  habit?: HabitRelationFilter | undefined;

  @TypeGraphQL.Field(() => TaskListRelationFilter, { nullable: true })
  subtasks?: TaskListRelationFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  rank?: IntFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  completedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => CalendarEventListRelationFilter, { nullable: true })
  calendarEvents?: CalendarEventListRelationFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
