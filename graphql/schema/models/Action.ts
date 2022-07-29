import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../models/Habit";
import { MetricRecord } from "../models/MetricRecord";
import { ActionCount } from "../resolvers/outputs/ActionCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Action", {
  isAbstract: true,
})
export class Action extends Model {
  habit?: Habit | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  end!: Date;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notes?: string | null;

  metricRecords?: MetricRecord[];

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => ActionCount, { nullable: true })
  _count?: ActionCount | null;
}
