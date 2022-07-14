import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  act?: Act;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actId!: string;

  scheduleTemplate?: ScheduleTemplate;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  scheduleTemplateId!: string;

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

  actionSchedules?: ActionSchedule[];

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCount, {
    nullable: true,
  })
  _count?: ActionScheduleTemplateCount | null;
}
