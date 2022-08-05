import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateOneWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpdateOneWithoutCalendarEventsInput";
import { CalendarUpdateOneRequiredWithoutEventsInput } from "../inputs/CalendarUpdateOneRequiredWithoutEventsInput";
import { HabitUpdateOneWithoutCalendarEventsInput } from "../inputs/HabitUpdateOneWithoutCalendarEventsInput";

@TypeGraphQL.InputType("CalendarEventUpdateInput", { isAbstract: true })
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

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field({ nullable: true })
  notes?: string | null | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled?: boolean | null | undefined;

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
}
