import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Goal } from "../../../models/Goal";
import { CreateGoalArgs } from "./args/CreateGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class CreateGoalResolver {
  @TypeGraphQL.Mutation((_returns) => Goal, {
    nullable: false,
  })
  async createGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateGoalArgs
  ): Promise<Goal> {
    return GoalCrudResolver.prototype.createGoal(ctx, info, args);
  }
}
