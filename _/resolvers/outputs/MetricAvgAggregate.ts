import * as TypeGraphQL from "type-graphql-v2-fork";
import { ObjectId } from "mongodb";
import { ObjectIdScalar } from "@/graphql/schema/scalars";

@TypeGraphQL.ObjectType("MetricAvgAggregate", { isAbstract: true })
export class MetricAvgAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;
}
