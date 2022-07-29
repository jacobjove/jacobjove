import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabit } from "../models/RoutineHabit";
import { RoutineCount } from "../resolvers/outputs/RoutineCount";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("Routine", {
  isAbstract: true,
})
export class Routine extends Model {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, { nullable: false })
  name!: string;

  habits?: RoutineHabit[];

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  durationInMinutes?: number | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  notes?: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;

  @TypeGraphQL.Field((_type) => RoutineCount, { nullable: true })
  _count?: RoutineCount | null;
}
