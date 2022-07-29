import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  isPublic!: boolean;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  defaultDurationInMinutes!: number | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => HabitCountAggregate, { nullable: true })
  _count!: HabitCountAggregate | null;

  @TypeGraphQL.Field(() => HabitAvgAggregate, { nullable: true })
  _avg!: HabitAvgAggregate | null;

  @TypeGraphQL.Field(() => HabitSumAggregate, { nullable: true })
  _sum!: HabitSumAggregate | null;

  @TypeGraphQL.Field(() => HabitMinAggregate, { nullable: true })
  _min!: HabitMinAggregate | null;

  @TypeGraphQL.Field(() => HabitMaxAggregate, { nullable: true })
  _max!: HabitMaxAggregate | null;
}
