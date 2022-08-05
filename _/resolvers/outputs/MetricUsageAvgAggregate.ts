import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@/graphql/schema/scalars";

@TypeGraphQL.ObjectType("MetricUsageAvgAggregate", { isAbstract: true })
export class MetricUsageAvgAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  metricId!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;
}
