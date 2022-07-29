import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("TaskScalarWhereInput", {
  isAbstract: true,
})
export class TaskScalarWhereInput {
  @TypeGraphQL.Field(() => [TaskScalarWhereInput], { nullable: true })
  AND?: TaskScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskScalarWhereInput], { nullable: true })
  OR?: TaskScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [TaskScalarWhereInput], { nullable: true })
  NOT?: TaskScalarWhereInput[] | undefined;

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

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  parentId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  habitId?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  rank?: IntFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  completedAt?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
