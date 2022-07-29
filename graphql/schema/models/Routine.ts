import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../models/RoutineHabit";
import { RoutineCount } from "../resolvers/outputs/RoutineCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Routine", {
  isAbstract: true,
})
export class Routine extends Model {
  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  habits?: RoutineHabit[];

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes?: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field(() => RoutineCount, { nullable: true })
  _count?: RoutineCount | null;
}
