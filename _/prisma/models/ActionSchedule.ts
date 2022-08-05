import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../../graphql/schema/enums/FREQUENCY";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { ActionScheduleTemplate } from "./ActionScheduleTemplate";
import { CalendarEvent } from "./CalendarEvent";
import { Habit } from "./Habit";

@TypeGraphQL.ObjectType("ActionSchedule", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class ActionSchedule extends Model {
  habit?: Habit;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  habitId!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  @Property({ required: true })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  quantity!: number;

  calendarEvents?: CalendarEvent[];

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  @Property({ required: true })
  active!: boolean;

  template?: ActionScheduleTemplate | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  templateId?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const ActionScheduleModel = getModelForClass<typeof ActionSchedule>(ActionSchedule);
export default ActionScheduleModel;
