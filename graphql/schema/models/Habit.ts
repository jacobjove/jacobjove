import * as TypeGraphQL from "type-graphql";
import { Act } from "../models/Act";
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
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actId!: string;

  act?: Act;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  user?: User;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  isPublic!: boolean;

  schedules?: ActionSchedule[];

  tasks?: Task[];

  calendarEvents?: CalendarEvent[];

  metricUsages?: MetricUsage[];

  goals?: Goal[];

  routines?: RoutineHabit[];

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  defaultDurationInMinutes?: number | null;

  actions?: Action[];

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

  @TypeGraphQL.Field((_type) => HabitCount, {
    nullable: true,
  })
  _count?: HabitCount | null;
}
