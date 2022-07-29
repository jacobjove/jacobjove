import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../enums/FREQUENCY";
import { Act } from "../models/Act";
import { ActionSchedule } from "../models/ActionSchedule";
import { ScheduleTemplate } from "../models/ScheduleTemplate";
import { ActionScheduleTemplateCount } from "../resolvers/outputs/ActionScheduleTemplateCount";
import { Model } from "./model";

@TypeGraphQL.ObjectType("ActionScheduleTemplate", {
  isAbstract: true,
})
export class ActionScheduleTemplate extends Model {
  act?: Act;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  scheduleTemplate?: ScheduleTemplate;

  @TypeGraphQL.Field(() => String, { nullable: false })
  scheduleTemplateId!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  actionSchedules?: ActionSchedule[];

  @TypeGraphQL.Field(() => ActionScheduleTemplateCount, { nullable: true })
  _count?: ActionScheduleTemplateCount | null;
}
