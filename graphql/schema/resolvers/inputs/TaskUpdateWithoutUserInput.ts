import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateManyWithoutTaskInput } from "../inputs/CalendarEventUpdateManyWithoutTaskInput";
import { HabitUpdateOneWithoutTasksInput } from "../inputs/HabitUpdateOneWithoutTasksInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentInput } from "../inputs/TaskUpdateManyWithoutParentInput";
import { TaskUpdateOneWithoutSubtasksInput } from "../inputs/TaskUpdateOneWithoutSubtasksInput";

@TypeGraphQL.InputType("TaskUpdateWithoutUserInput", {
  isAbstract: true,
})
export class TaskUpdateWithoutUserInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  plannedStartDate?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  dueDate?: Date | null | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rank?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  completedAt?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => TaskUpdateOneWithoutSubtasksInput, { nullable: true })
  parent?: TaskUpdateOneWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneWithoutTasksInput, { nullable: true })
  habit?: HabitUpdateOneWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateManyWithoutParentInput, { nullable: true })
  subtasks?: TaskUpdateManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyWithoutTaskInput, { nullable: true })
  calendarEvents?: CalendarEventUpdateManyWithoutTaskInput | undefined;
}
