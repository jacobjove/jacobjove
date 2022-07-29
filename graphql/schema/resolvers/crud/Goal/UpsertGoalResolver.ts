import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Goal } from "../../../models/Goal";
import { UpsertGoalArgs } from "./args/UpsertGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class UpsertGoalResolver {
  @TypeGraphQL.Mutation((_returns) => Goal, { nullable: false })
  async upsertGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertGoalArgs
  ): Promise<Goal> {
    return GoalCrudResolver.prototype.upsertGoal(ctx, info, args);
  }
}
