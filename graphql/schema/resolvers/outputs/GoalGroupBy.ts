import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalAvgAggregate } from "../outputs/GoalAvgAggregate";
import { GoalCountAggregate } from "../outputs/GoalCountAggregate";
import { GoalMaxAggregate } from "../outputs/GoalMaxAggregate";
import { GoalMinAggregate } from "../outputs/GoalMinAggregate";
import { GoalSumAggregate } from "../outputs/GoalSumAggregate";

@TypeGraphQL.ObjectType("GoalGroupBy", {
  isAbstract: true,
})
export class GoalGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  goalId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => GoalCountAggregate, { nullable: true })
  _count!: GoalCountAggregate | null;

  @TypeGraphQL.Field(() => GoalAvgAggregate, { nullable: true })
  _avg!: GoalAvgAggregate | null;

  @TypeGraphQL.Field(() => GoalSumAggregate, { nullable: true })
  _sum!: GoalSumAggregate | null;

  @TypeGraphQL.Field(() => GoalMinAggregate, { nullable: true })
  _min!: GoalMinAggregate | null;

  @TypeGraphQL.Field(() => GoalMaxAggregate, { nullable: true })
  _max!: GoalMaxAggregate | null;
}
