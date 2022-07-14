import * as TypeGraphQL from "type-graphql";
import { CalendarEventUpdateManyWithoutTaskInput } from "../inputs/CalendarEventUpdateManyWithoutTaskInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutParentInput } from "../inputs/TaskUpdateManyWithoutParentInput";
import { TaskUpdateOneWithoutSubtasksInput } from "../inputs/TaskUpdateOneWithoutSubtasksInput";
import { UserUpdateOneRequiredWithoutTasksInput } from "../inputs/UserUpdateOneRequiredWithoutTasksInput";

@TypeGraphQL.InputType("TaskUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class TaskUpdateWithoutHabitInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  plannedStartDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  dueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  rank?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  completedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateOneRequiredWithoutTasksInput, {
    nullable: true,
  })
  user?: UserUpdateOneRequiredWithoutTasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateOneWithoutSubtasksInput, {
    nullable: true,
  })
  parent?: TaskUpdateOneWithoutSubtasksInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateManyWithoutParentInput, {
    nullable: true,
  })
  subtasks?: TaskUpdateManyWithoutParentInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyWithoutTaskInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventUpdateManyWithoutTaskInput | undefined;
}
