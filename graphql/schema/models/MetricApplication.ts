import * as TypeGraphQL from "type-graphql-v2-fork";
import { Act } from "../models/Act";
import { Metric } from "../models/Metric";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("MetricApplication", {
  isAbstract: true,
})
export class MetricApplication extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  act?: Act;

  @TypeGraphQL.Field(() => String, { nullable: false })
  metricId!: string;

  metric?: Metric;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
