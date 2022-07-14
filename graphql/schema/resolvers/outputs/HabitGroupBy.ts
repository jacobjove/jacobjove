import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { HabitAvgAggregate } from "../outputs/HabitAvgAggregate";
import { HabitCountAggregate } from "../outputs/HabitCountAggregate";
import { HabitMaxAggregate } from "../outputs/HabitMaxAggregate";
import { HabitMinAggregate } from "../outputs/HabitMinAggregate";
import { HabitSumAggregate } from "../outputs/HabitSumAggregate";

@TypeGraphQL.ObjectType("HabitGroupBy", {
  isAbstract: true,
})
export class HabitGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  isPublic!: boolean;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  defaultDurationInMinutes!: number | null;

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

  @TypeGraphQL.Field((_type) => HabitCountAggregate, {
    nullable: true,
  })
  _count!: HabitCountAggregate | null;

  @TypeGraphQL.Field((_type) => HabitAvgAggregate, {
    nullable: true,
  })
  _avg!: HabitAvgAggregate | null;

  @TypeGraphQL.Field((_type) => HabitSumAggregate, {
    nullable: true,
  })
  _sum!: HabitSumAggregate | null;

  @TypeGraphQL.Field((_type) => HabitMinAggregate, {
    nullable: true,
  })
  _min!: HabitMinAggregate | null;

  @TypeGraphQL.Field((_type) => HabitMaxAggregate, {
    nullable: true,
  })
  _max!: HabitMaxAggregate | null;
}
