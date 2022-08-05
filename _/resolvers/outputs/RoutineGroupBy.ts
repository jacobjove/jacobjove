import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { RoutineAvgAggregate } from "../outputs/RoutineAvgAggregate";
import { RoutineCountAggregate } from "../outputs/RoutineCountAggregate";
import { RoutineMaxAggregate } from "../outputs/RoutineMaxAggregate";
import { RoutineMinAggregate } from "../outputs/RoutineMinAggregate";
import { RoutineSumAggregate } from "../outputs/RoutineSumAggregate";

@TypeGraphQL.ObjectType("RoutineGroupBy", { isAbstract: true })
export class RoutineGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  durationInMinutes!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => RoutineCountAggregate, { nullable: true })
  _count!: RoutineCountAggregate | null;

  @TypeGraphQL.Field(() => RoutineAvgAggregate, { nullable: true })
  _avg!: RoutineAvgAggregate | null;

  @TypeGraphQL.Field(() => RoutineSumAggregate, { nullable: true })
  _sum!: RoutineSumAggregate | null;

  @TypeGraphQL.Field(() => RoutineMinAggregate, { nullable: true })
  _min!: RoutineMinAggregate | null;

  @TypeGraphQL.Field(() => RoutineMaxAggregate, { nullable: true })
  _max!: RoutineMaxAggregate | null;
}
