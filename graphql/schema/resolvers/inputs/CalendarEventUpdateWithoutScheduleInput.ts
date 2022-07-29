import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarUpdateOneRequiredWithoutEventsInput } from "../inputs/CalendarUpdateOneRequiredWithoutEventsInput";
import { HabitUpdateOneWithoutCalendarEventsInput } from "../inputs/HabitUpdateOneWithoutCalendarEventsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutCalendarEventsInput } from "../inputs/TaskUpdateOneWithoutCalendarEventsInput";

@TypeGraphQL.InputType("CalendarEventUpdateWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventUpdateWithoutScheduleInput {
  @TypeGraphQL.Field({ nullable: true })
  uid?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  title?: string | null | undefined;

  @TypeGraphQL.Field({ nullable: true })
  start?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  end?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, { nullable: true })
  allDay?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  canceled?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => CalendarUpdateOneRequiredWithoutEventsInput, { nullable: true })
  calendar?: CalendarUpdateOneRequiredWithoutEventsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateOneWithoutCalendarEventsInput, { nullable: true })
  habit?: HabitUpdateOneWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => TaskUpdateOneWithoutCalendarEventsInput, { nullable: true })
  task?: TaskUpdateOneWithoutCalendarEventsInput | undefined;
}
