import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionUpdateManyWithoutHabitInput } from "../inputs/ActionUpdateManyWithoutHabitInput";
import { ActUpdateOneRequiredWithoutHabitsInput } from "../inputs/ActUpdateOneRequiredWithoutHabitsInput";
import { CalendarEventUpdateManyWithoutHabitInput } from "../inputs/CalendarEventUpdateManyWithoutHabitInput";
import { GoalUpdateManyWithoutHabitInput } from "../inputs/GoalUpdateManyWithoutHabitInput";
import { MetricUsageUpdateManyWithoutHabitInput } from "../inputs/MetricUsageUpdateManyWithoutHabitInput";
import { RoutineHabitUpdateManyWithoutHabitInput } from "../inputs/RoutineHabitUpdateManyWithoutHabitInput";

@TypeGraphQL.InputType("HabitUpdateWithoutSchedulesInput", { isAbstract: true })
export class HabitUpdateWithoutSchedulesInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  public?: boolean | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  defaultDurationInMinutes?: number | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  act?: ActUpdateOneRequiredWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyWithoutHabitInput, { nullable: true })
  calendarEvents?: CalendarEventUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageUpdateManyWithoutHabitInput, { nullable: true })
  metricUsages?: MetricUsageUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutHabitInput, { nullable: true })
  goals?: GoalUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitUpdateManyWithoutHabitInput, { nullable: true })
  routines?: RoutineHabitUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => ActionUpdateManyWithoutHabitInput, { nullable: true })
  actions?: ActionUpdateManyWithoutHabitInput | undefined;
}
