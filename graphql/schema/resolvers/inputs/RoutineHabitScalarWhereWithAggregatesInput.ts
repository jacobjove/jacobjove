import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("RoutineHabitScalarWhereWithAggregatesInput", {
  isAbstract: true,
})
export class RoutineHabitScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereWithAggregatesInput], { nullable: true })
  AND?: RoutineHabitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereWithAggregatesInput], { nullable: true })
  OR?: RoutineHabitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: RoutineHabitScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  routineId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => StringWithAggregatesFilter, { nullable: true })
  habitId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  position?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => IntWithAggregatesFilter, { nullable: true })
  durationInMinutes?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableWithAggregatesFilter, { nullable: true })
  archivedAt?: DateTimeNullableWithAggregatesFilter | undefined;
}
