import * as TypeGraphQL from "type-graphql";
import { Act } from "../models/Act";
import { Metric } from "../models/Metric";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("MetricApplication", {
  isAbstract: true,
})
export class MetricApplication extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actId!: string;

  act?: Act;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  metricId!: string;

  metric?: Metric;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null;
}
