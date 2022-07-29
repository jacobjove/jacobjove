import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("RoutineHabitScalarWhereInput", {
  isAbstract: true,
})
export class RoutineHabitScalarWhereInput {
  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereInput], { nullable: true })
  AND?: RoutineHabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereInput], { nullable: true })
  OR?: RoutineHabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereInput], { nullable: true })
  NOT?: RoutineHabitScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  routineId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => StringFilter, { nullable: true })
  habitId?: StringFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  position?: IntFilter | undefined;

  @TypeGraphQL.Field(() => IntFilter, { nullable: true })
  durationInMinutes?: IntFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(() => DateTimeNullableFilter, { nullable: true })
  archivedAt?: DateTimeNullableFilter | undefined;
}
