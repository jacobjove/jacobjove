import * as TypeGraphQL from "type-graphql";
import { Habit } from "../models/Habit";
import { Routine } from "../models/Routine";
import { DateTimeScalar } from "../scalars";
import { Model } from "./model";

@TypeGraphQL.ObjectType("RoutineHabit", {
  isAbstract: true,
})
export class RoutineHabit extends Model {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  routine?: Routine;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  routineId!: string;

  habit?: Habit;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  habitId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  position!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  durationInMinutes!: number;

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
