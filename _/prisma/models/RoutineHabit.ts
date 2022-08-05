import { DEFAULT_MODEL_OPTIONS } from "@/graphql/schema/constants";
import { Model } from "@/graphql/schema/types";
import { getModelForClass, ModelOptions, prop as Property } from "@typegoose/typegoose";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../../graphql/schema/scalars";
import { Habit } from "./Habit";
import { Routine } from "./Routine";

@TypeGraphQL.ObjectType("RoutineHabit", { isAbstract: true })
@ModelOptions(DEFAULT_MODEL_OPTIONS)
export class RoutineHabit extends Model {
  routine?: Routine;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  routineId!: string;

  habit?: Habit;

  @TypeGraphQL.Field(() => String, { nullable: false })
  @Property({ required: true })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  position!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  @Property({ required: true })
  durationInMinutes!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  @Property({ required: false })
  archivedAt?: Date | null;
}

const RoutineHabitModel = getModelForClass<typeof RoutineHabit>(RoutineHabit);
export default RoutineHabitModel;
