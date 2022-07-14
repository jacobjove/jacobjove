import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { ActionScheduleCreateNestedOneWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateNestedOneWithoutCalendarEventsInput";
import { HabitCreateNestedOneWithoutCalendarEventsInput } from "../inputs/HabitCreateNestedOneWithoutCalendarEventsInput";
import { TaskCreateNestedOneWithoutCalendarEventsInput } from "../inputs/TaskCreateNestedOneWithoutCalendarEventsInput";

@TypeGraphQL.InputType("CalendarEventCreateWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventCreateWithoutCalendarInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  start!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  end?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  canceled?: boolean | null | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateNestedOneWithoutCalendarEventsInput, {
    nullable: true,
  })
  schedule?: ActionScheduleCreateNestedOneWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutCalendarEventsInput, {
    nullable: true,
  })
  habit?: HabitCreateNestedOneWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => TaskCreateNestedOneWithoutCalendarEventsInput, {
    nullable: true,
  })
  task?: TaskCreateNestedOneWithoutCalendarEventsInput | undefined;
}
