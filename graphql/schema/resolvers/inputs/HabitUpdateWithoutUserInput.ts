import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateManyWithoutHabitInput } from "../inputs/ActionScheduleUpdateManyWithoutHabitInput";
import { ActionUpdateManyWithoutHabitInput } from "../inputs/ActionUpdateManyWithoutHabitInput";
import { ActUpdateOneRequiredWithoutHabitsInput } from "../inputs/ActUpdateOneRequiredWithoutHabitsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarEventUpdateManyWithoutHabitInput } from "../inputs/CalendarEventUpdateManyWithoutHabitInput";
import { GoalUpdateManyWithoutHabitInput } from "../inputs/GoalUpdateManyWithoutHabitInput";
import { MetricUsageUpdateManyWithoutHabitInput } from "../inputs/MetricUsageUpdateManyWithoutHabitInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { RoutineHabitUpdateManyWithoutHabitInput } from "../inputs/RoutineHabitUpdateManyWithoutHabitInput";
import { TaskUpdateManyWithoutHabitInput } from "../inputs/TaskUpdateManyWithoutHabitInput";

@TypeGraphQL.InputType("HabitUpdateWithoutUserInput", {
  isAbstract: true,
})
export class HabitUpdateWithoutUserInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableIntFieldUpdateOperationsInput, { nullable: true })
  defaultDurationInMinutes?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ActUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  act?: ActUpdateOneRequiredWithoutHabitsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateManyWithoutHabitInput, { nullable: true })
  schedules?: ActionScheduleUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateManyWithoutHabitInput, { nullable: true })
  tasks?: TaskUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyWithoutHabitInput, { nullable: true })
  calendarEvents?: CalendarEventUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateManyWithoutHabitInput, { nullable: true })
  metricUsages?: MetricUsageUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => GoalUpdateManyWithoutHabitInput, { nullable: true })
  goals?: GoalUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitUpdateManyWithoutHabitInput, { nullable: true })
  routines?: RoutineHabitUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field((_type) => ActionUpdateManyWithoutHabitInput, { nullable: true })
  actions?: ActionUpdateManyWithoutHabitInput | undefined;
}
