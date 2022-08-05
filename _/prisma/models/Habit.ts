import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar, ObjectIdScalar } from "../../../graphql/schema/scalars";
import { Action } from "./Action";
import { ActionSchedule } from "./ActionSchedule";
import { CalendarEvent } from "./CalendarEvent";
import { Goal } from "./Goal";
import { MetricUsage } from "./MetricUsage";
import { RoutineHabit } from "./RoutineHabit";
import { Task } from "./Task";
import { User } from "./User";

@TypeGraphQL.ObjectType("Habit", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Habit extends Model {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: false })
  @Property({ required: true })
  userId!: ObjectId;

  user?: User;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  public!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  chronString?: string;

  schedules?: ActionSchedule[];

  tasks?: Task[];

  calendarEvents?: CalendarEvent[];

  metricUsages?: MetricUsage[];

  goals?: Goal[];

  routines?: RoutineHabit[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  @Property({ required: false })
  defaultDurationInMinutes?: number | null;

  actions?: Action[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const HabitModel = getModelForClass<typeof Habit>(Habit);
export default HabitModel;
