import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "../models/Action";
import { ActionSchedule } from "../models/ActionSchedule";
import { CalendarEvent } from "../models/CalendarEvent";
import { Goal } from "../models/Goal";
import { MetricUsage } from "../models/MetricUsage";
import { RoutineHabit } from "../models/RoutineHabit";
import { Task } from "../models/Task";
import { User } from "../models/User";
import { HabitCount } from "../resolvers/outputs/HabitCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Habit", {
  isAbstract: true,
})
export class Habit extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  chronString?: string;

  schedules?: ActionSchedule[];

  tasks?: Task[];

  calendarEvents?: CalendarEvent[];

  metricUsages?: MetricUsage[];

  goals?: Goal[];

  routines?: RoutineHabit[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  defaultDurationInMinutes?: number | null;

  actions?: Action[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => HabitCount, { nullable: true })
  _count?: HabitCount | null;
}
