import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionSchedule } from "../models/ActionSchedule";
import { Calendar } from "../models/Calendar";
import { Habit } from "../models/Habit";
import { Task } from "../models/Task";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("CalendarEvent", {
  isAbstract: true,
})
export class CalendarEvent extends Model {
  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId?: string | null;

  calendar?: Calendar;

  @TypeGraphQL.Field(() => String, { nullable: false })
  calendarId!: string;

  schedule?: ActionSchedule | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  scheduleId?: string | null;

  habit?: Habit | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId?: string | null;

  task?: Task | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  taskId?: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  end?: Date | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  allDay!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled?: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}

export const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;
