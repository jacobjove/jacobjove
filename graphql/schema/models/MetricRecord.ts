import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "../models/Action";
import { MetricUsage } from "../models/MetricUsage";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("MetricRecord", {
  isAbstract: true,
})
export class MetricRecord extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  metricUsageId!: string;

  metricUsage?: MetricUsage;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actionId!: string;

  action?: Action;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  value!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
