import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../enums/FREQUENCY";
import { ActionScheduleTemplate } from "../models/ActionScheduleTemplate";
import { ScheduleTemplateCount } from "../resolvers/outputs/ScheduleTemplateCount";
import { Model } from "./model";

@TypeGraphQL.ObjectType("ScheduleTemplate", {
  isAbstract: true,
})
export class ScheduleTemplate extends Model {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => String, { nullable: true })
  chron?: string | null;

  actionScheduleTemplates?: ActionScheduleTemplate[];

  @TypeGraphQL.Field(() => ScheduleTemplateCount, { nullable: true })
  _count?: ScheduleTemplateCount | null;
}
