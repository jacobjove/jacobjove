import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { ActionSchedule } from "./ActionSchedule";
import { Calendar } from "./Calendar";
import { Habit } from "./Habit";
import { Task } from "./Task";

@TypeGraphQL.ObjectType("CalendarEvent", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class CalendarEvent extends Model {
  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  remoteId?: string | null;

  calendar?: Calendar;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  calendarId!: ObjectId;

  schedule?: ActionSchedule | null;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  @Property({ required: false })
  scheduleId?: ObjectId | null;

  habit?: Habit | null;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  @Property({ required: false })
  habitId?: ObjectId | null;

  task?: Task | null;

  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  @Property({ required: false })
  taskId?: ObjectId | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  title!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  @Property({ required: true })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  end?: Date | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  allDay!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  notes?: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  @Property({ required: false })
  canceled?: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const CalendarEventModel = getModelForClass<typeof CalendarEvent>(CalendarEvent);
export default CalendarEventModel;

export const DEFAULT_EVENT_LENGTH_IN_MINUTES = 29;
