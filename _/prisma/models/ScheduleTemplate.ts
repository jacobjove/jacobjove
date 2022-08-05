import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../../graphql/schema/enums/FREQUENCY";
import { ActionScheduleTemplate } from "./ActionScheduleTemplate";

@TypeGraphQL.ObjectType("ScheduleTemplate", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class ScheduleTemplate extends Model {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  @Property({ required: true })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  multiplier!: number;

  @TypeGraphQL.Field(() => String, { nullable: true })
  @Property({ required: false })
  chron?: string | null;

  actionScheduleTemplates?: ActionScheduleTemplate[];
}

const ScheduleTemplateModel = getModelForClass<typeof ScheduleTemplate>(ScheduleTemplate);
export default ScheduleTemplateModel;
