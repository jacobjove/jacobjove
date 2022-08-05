import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplication } from "../models/MetricApplication";
import { MetricUsage } from "../models/MetricUsage";

@TypeGraphQL.ObjectType("Metric", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class Metric extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  name!: string;

  applications?: MetricApplication[];

  usages?: MetricUsage[];
}

const MetricModel = getModelForClass<typeof Metric>(Metric);
export default MetricModel;
