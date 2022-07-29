import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Goal } from "../../../models/Goal";
import { UpdateGoalArgs } from "./args/UpdateGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class UpdateGoalResolver {
  @TypeGraphQL.Mutation((_returns) => Goal, { nullable: true })
  async updateGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateGoalArgs
  ): Promise<Goal | null> {
    return GoalCrudResolver.prototype.updateGoal(ctx, info, args);
  }
}
