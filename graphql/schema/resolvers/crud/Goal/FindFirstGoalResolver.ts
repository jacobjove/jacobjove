import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Goal } from "../../../models/Goal";
import { FindFirstGoalArgs } from "./args/FindFirstGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class FindFirstGoalResolver {
  @TypeGraphQL.Query((_returns) => Goal, { nullable: true })
  async findFirstGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstGoalArgs
  ): Promise<Goal | null> {
    return GoalCrudResolver.prototype.findFirstGoal(ctx, info, args);
  }
}
