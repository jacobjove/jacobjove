import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Goal } from "../../../models/Goal";
import { GoalGroupBy } from "../../outputs/GoalGroupBy";
import { GroupByGoalArgs } from "./args/GroupByGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class GroupByGoalResolver {
  @TypeGraphQL.Query((_returns) => [GoalGroupBy], {
    nullable: false,
  })
  async groupByGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByGoalArgs
  ): Promise<GoalGroupBy[]> {
    return GoalCrudResolver.prototype.groupByGoal(ctx, info, args);
  }
}
