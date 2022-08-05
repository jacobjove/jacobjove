import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("ScheduleTemplateSumAggregate", { isAbstract: true })
export class ScheduleTemplateSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier!: number | null;
}
