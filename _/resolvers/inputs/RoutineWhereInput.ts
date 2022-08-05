import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { RoutineHabitListRelationFilter } from "../inputs/RoutineHabitListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("RoutineWhereInput", { isAbstract: true })
export class RoutineWhereInput {
  @TypeGraphQL.Field(() => [RoutineWhereInput], { nullable: true })
  AND?: RoutineWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineWhereInput], { nullable: true })
  OR?: RoutineWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineWhereInput], { nullable: true })
  NOT?: RoutineWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(() => RoutineHabitListRelationFilter, { nullable: true })
  habits?: RoutineHabitListRelationFilter | undefined;

  @TypeGraphQL.Field(() => IntNullableFilter, { nullable: true })
  durationInMinutes?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(() => StringNullableFilter, { nullable: true })
  notes?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
