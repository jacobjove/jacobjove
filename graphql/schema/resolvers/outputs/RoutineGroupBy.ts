import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { RoutineAvgAggregate } from "../outputs/RoutineAvgAggregate";
import { RoutineCountAggregate } from "../outputs/RoutineCountAggregate";
import { RoutineMaxAggregate } from "../outputs/RoutineMaxAggregate";
import { RoutineMinAggregate } from "../outputs/RoutineMinAggregate";
import { RoutineSumAggregate } from "../outputs/RoutineSumAggregate";

@TypeGraphQL.ObjectType("RoutineGroupBy", {
  isAbstract: true,
})
export class RoutineGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  durationInMinutes!: number | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notes!: string | null;

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
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => RoutineCountAggregate, {
    nullable: true,
  })
  _count!: RoutineCountAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineAvgAggregate, {
    nullable: true,
  })
  _avg!: RoutineAvgAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineSumAggregate, {
    nullable: true,
  })
  _sum!: RoutineSumAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineMinAggregate, {
    nullable: true,
  })
  _min!: RoutineMinAggregate | null;

  @TypeGraphQL.Field((_type) => RoutineMaxAggregate, {
    nullable: true,
  })
  _max!: RoutineMaxAggregate | null;
}
