import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { RoutineHabitAvgAggregate } from "../outputs/RoutineHabitAvgAggregate";
import { RoutineHabitCountAggregate } from "../outputs/RoutineHabitCountAggregate";
import { RoutineHabitMaxAggregate } from "../outputs/RoutineHabitMaxAggregate";
import { RoutineHabitMinAggregate } from "../outputs/RoutineHabitMinAggregate";
import { RoutineHabitSumAggregate } from "../outputs/RoutineHabitSumAggregate";

@TypeGraphQL.ObjectType("RoutineHabitGroupBy", { isAbstract: true })
export class RoutineHabitGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  routineId!: string;

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
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => RoutineHabitCountAggregate, { nullable: true })
  _count!: RoutineHabitCountAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitAvgAggregate, { nullable: true })
  _avg!: RoutineHabitAvgAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitSumAggregate, { nullable: true })
  _sum!: RoutineHabitSumAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitMinAggregate, { nullable: true })
  _min!: RoutineHabitMinAggregate | null;

  @TypeGraphQL.Field(() => RoutineHabitMaxAggregate, { nullable: true })
  _max!: RoutineHabitMaxAggregate | null;
}
