import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "../models/Action";
import { MetricUsage } from "../models/MetricUsage";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("MetricRecord", {
  isAbstract: true,
})
export class MetricRecord extends Model {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  metricUsageId!: string;

  metricUsage?: MetricUsage;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  actionId!: string;

  action?: Action;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  value!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
