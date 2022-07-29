import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateManyWithoutHabitInput } from "../inputs/ActionScheduleUpdateManyWithoutHabitInput";
import { ActionUpdateManyWithoutHabitInput } from "../inputs/ActionUpdateManyWithoutHabitInput";
import { ActUpdateOneRequiredWithoutHabitsInput } from "../inputs/ActUpdateOneRequiredWithoutHabitsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarEventUpdateManyWithoutHabitInput } from "../inputs/CalendarEventUpdateManyWithoutHabitInput";
import { GoalUpdateManyWithoutHabitInput } from "../inputs/GoalUpdateManyWithoutHabitInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { RoutineHabitUpdateManyWithoutHabitInput } from "../inputs/RoutineHabitUpdateManyWithoutHabitInput";
import { TaskUpdateManyWithoutHabitInput } from "../inputs/TaskUpdateManyWithoutHabitInput";
import { UserUpdateOneRequiredWithoutHabitsInput } from "../inputs/UserUpdateOneRequiredWithoutHabitsInput";

@TypeGraphQL.InputType("HabitUpdateWithoutMetricUsagesInput", {
  isAbstract: true,
})
export class HabitUpdateWithoutMetricUsagesInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPublic?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => NullableIntFieldUpdateOperationsInput, { nullable: true })
  defaultDurationInMinutes?: NullableIntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  act?: ActUpdateOneRequiredWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutHabitsInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutHabitsInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleUpdateManyWithoutHabitInput, { nullable: true })
  schedules?: ActionScheduleUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateManyWithoutHabitInput, { nullable: true })
  tasks?: TaskUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyWithoutHabitInput, { nullable: true })
  calendarEvents?: CalendarEventUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => GoalUpdateManyWithoutHabitInput, { nullable: true })
  goals?: GoalUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => RoutineHabitUpdateManyWithoutHabitInput, { nullable: true })
  routines?: RoutineHabitUpdateManyWithoutHabitInput | undefined;

  @TypeGraphQL.Field(() => ActionUpdateManyWithoutHabitInput, { nullable: true })
  actions?: ActionUpdateManyWithoutHabitInput | undefined;
}
