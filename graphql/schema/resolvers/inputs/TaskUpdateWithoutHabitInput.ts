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

  @TypeGraphQL.Field(() => UserUpdateOneRequiredWithoutTasksInput, { nullable: true })
  user?: UserUpdateOneRequiredWithoutTasksInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateOneWithoutSubtasksInput, { nullable: true })
  parent?: TaskUpdateOneWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateManyWithoutParentInput, { nullable: true })
  subtasks?: TaskUpdateManyWithoutParentInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyWithoutTaskInput, { nullable: true })
  calendarEvents?: CalendarEventUpdateManyWithoutTaskInput | undefined;
}
