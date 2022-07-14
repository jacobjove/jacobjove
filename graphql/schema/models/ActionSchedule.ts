import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../enums/FREQUENCY";
import { ActionScheduleTemplate } from "../models/ActionScheduleTemplate";
import { CalendarEvent } from "../models/CalendarEvent";
import { Habit } from "../models/Habit";
import { ActionScheduleCount } from "../resolvers/outputs/ActionScheduleCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("ActionSchedule", {
  isAbstract: true,
})
export class ActionSchedule extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  habit?: Habit;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  habitId!: string;

  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: false,
  })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  multiplier!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  quantity!: number;

  calendarEvents?: CalendarEvent[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  active!: boolean;

  template?: ActionScheduleTemplate | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  templateId?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => ActionScheduleCount, {
    nullable: true,
  })
  _count?: ActionScheduleCount | null;
}
