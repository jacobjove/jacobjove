import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Goal } from "../../../models/Goal";
import { FindUniqueGoalArgs } from "./args/FindUniqueGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class FindUniqueGoalResolver {
  @TypeGraphQL.Query((_returns) => Goal, { nullable: true })
  async goal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueGoalArgs
  ): Promise<Goal | null> {
    return GoalCrudResolver.prototype.goal(ctx, info, args);
  }
}
