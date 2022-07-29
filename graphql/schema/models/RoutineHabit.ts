import * as TypeGraphQL from "type-graphql-v2-fork";
import { Habit } from "../models/Habit";
import { Routine } from "../models/Routine";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("RoutineHabit", {
  isAbstract: true,
})
export class RoutineHabit extends Model {
  routine?: Routine;

  @TypeGraphQL.Field(() => String, { nullable: false })
  routineId!: string;

  habit?: Habit;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  position!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  durationInMinutes!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null;
}
