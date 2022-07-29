import * as TypeGraphQL from "type-graphql-v2-fork";
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
  habit?: Habit;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  calendarEvents?: CalendarEvent[];

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  active!: boolean;

  template?: ActionScheduleTemplate | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  templateId?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => ActionScheduleCount, { nullable: true })
  _count?: ActionScheduleCount | null;
}
