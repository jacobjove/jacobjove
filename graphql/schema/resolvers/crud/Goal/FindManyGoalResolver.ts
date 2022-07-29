import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Goal } from "../../../models/Goal";
import { FindManyGoalArgs } from "./args/FindManyGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class FindManyGoalResolver {
  @TypeGraphQL.Query((_returns) => [Goal], { nullable: false })
  async goals(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyGoalArgs
  ): Promise<Goal[]> {
    return GoalCrudResolver.prototype.goals(ctx, info, args);
  }
}
