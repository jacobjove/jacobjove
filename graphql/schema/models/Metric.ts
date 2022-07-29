import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplication } from "../models/MetricApplication";
import { MetricUsage } from "../models/MetricUsage";
import { MetricCount } from "../resolvers/outputs/MetricCount";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Metric", {
  isAbstract: true,
})
export class Metric extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  applications?: MetricApplication[];

  usages?: MetricUsage[];

  @TypeGraphQL.Field(() => MetricCount, { nullable: true })
  _count?: MetricCount | null;
}
