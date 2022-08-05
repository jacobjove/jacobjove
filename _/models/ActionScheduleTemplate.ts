import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../enums/FREQUENCY";
import { Act } from "../models/Act";
import { ActionSchedule } from "../models/ActionSchedule";
import { ScheduleTemplate } from "../models/ScheduleTemplate";

@TypeGraphQL.ObjectType("ActionScheduleTemplate", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class ActionScheduleTemplate extends Model {
  act?: Act;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  actId!: string;

  scheduleTemplate?: ScheduleTemplate;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  scheduleTemplateId!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  @Property({ required: true })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  quantity!: number;

  actionSchedules?: ActionSchedule[];
}

const ActionScheduleTemplateModel =
  getModelForClass<typeof ActionScheduleTemplate>(ActionScheduleTemplate);
export default ActionScheduleTemplateModel;
