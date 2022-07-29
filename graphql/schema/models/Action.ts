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

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  end!: Date;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null;

  metricRecords?: MetricRecord[];

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => ActionCount, { nullable: true })
  _count?: ActionCount | null;
}
