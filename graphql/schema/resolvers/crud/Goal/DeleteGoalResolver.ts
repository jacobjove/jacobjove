import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Goal } from "../../../models/Goal";
import { DeleteGoalArgs } from "./args/DeleteGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class DeleteGoalResolver {
  @TypeGraphQL.Mutation((_returns) => Goal, {
    nullable: true,
  })
  async deleteGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteGoalArgs
  ): Promise<Goal | null> {
    return GoalCrudResolver.prototype.deleteGoal(ctx, info, args);
  }
}
