import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { ObjectId } from "mongodb";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("RoutineHabitSumAggregate", { isAbstract: true })
export class RoutineHabitSumAggregate {
  @TypeGraphQL.Field(() => ObjectIdScalar, { nullable: true })
  _id!: ObjectId | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  routineId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  position!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes!: number | null;
}
