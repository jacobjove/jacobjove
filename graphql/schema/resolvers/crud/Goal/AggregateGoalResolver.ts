import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Goal } from "../../../models/Goal";
import { AggregateGoal } from "../../outputs/AggregateGoal";
import { AggregateGoalArgs } from "./args/AggregateGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class AggregateGoalResolver {
  @TypeGraphQL.Query((_returns) => AggregateGoal, {
    nullable: false,
  })
  async aggregateGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateGoalArgs
  ): Promise<AggregateGoal> {
    return GoalCrudResolver.prototype.aggregateGoal(ctx, info, args);
  }
}
