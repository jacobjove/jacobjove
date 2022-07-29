import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateOneWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpdateOneWithoutCalendarEventsInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarUpdateOneRequiredWithoutEventsInput } from "../inputs/CalendarUpdateOneRequiredWithoutEventsInput";
import { HabitUpdateOneWithoutCalendarEventsInput } from "../inputs/HabitUpdateOneWithoutCalendarEventsInput";
import { NullableBoolFieldUpdateOperationsInput } from "../inputs/NullableBoolFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutCalendarEventsInput } from "../inputs/TaskUpdateOneWithoutCalendarEventsInput";

@TypeGraphQL.InputType("CalendarEventUpdateInput", {
  isAbstract: true,
})
export class CalendarEventUpdateInput {
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

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  allDay?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  canceled?: NullableBoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => CalendarUpdateOneRequiredWithoutEventsInput, { nullable: true })
  calendar?: CalendarUpdateOneRequiredWithoutEventsInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleUpdateOneWithoutCalendarEventsInput, {
    nullable: true,
  })
  schedule?: ActionScheduleUpdateOneWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneWithoutCalendarEventsInput, { nullable: true })
  habit?: HabitUpdateOneWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => TaskUpdateOneWithoutCalendarEventsInput, { nullable: true })
  task?: TaskUpdateOneWithoutCalendarEventsInput | undefined;
}
