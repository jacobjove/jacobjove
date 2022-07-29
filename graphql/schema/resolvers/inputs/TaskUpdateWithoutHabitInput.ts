import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateManyWithoutTaskInput } from "../inputs/CalendarEventUpdateManyWithoutTaskInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentInput } from "../inputs/TaskUpdateManyWithoutParentInput";
import { TaskUpdateOneWithoutSubtasksInput } from "../inputs/TaskUpdateOneWithoutSubtasksInput";
import { UserUpdateOneRequiredWithoutTasksInput } from "../inputs/UserUpdateOneRequiredWithoutTasksInput";

@TypeGraphQL.InputType("TaskUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class TaskUpdateWithoutHabitInput {
  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  description?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  plannedStartDate?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  dueDate?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, { nullable: true })
  rank?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  completedAt?: Date | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutTasksInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateOneWithoutSubtasksInput, { nullable: true })
  parent?: TaskUpdateOneWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateManyWithoutParentInput, { nullable: true })
  subtasks?: TaskUpdateManyWithoutParentInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyWithoutTaskInput, { nullable: true })
  calendarEvents?: CalendarEventUpdateManyWithoutTaskInput | undefined;
}
