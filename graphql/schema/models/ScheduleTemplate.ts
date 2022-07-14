import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../enums/FREQUENCY";
import { ActionScheduleTemplate } from "../models/ActionScheduleTemplate";
import { ScheduleTemplateCount } from "../resolvers/outputs/ScheduleTemplateCount";
import { Model } from "./model";

@TypeGraphQL.ObjectType("ScheduleTemplate", {
  isAbstract: true,
})
export class ScheduleTemplate extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: false,
  })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  multiplier!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  chron?: string | null;

  actionScheduleTemplates?: ActionScheduleTemplate[];

  @TypeGraphQL.Field((_type) => ScheduleTemplateCount, {
    nullable: true,
  })
  _count?: ScheduleTemplateCount | null;
}
