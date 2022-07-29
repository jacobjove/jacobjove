import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Goal } from "../../../models/Goal";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyGoalArgs } from "./args/UpdateManyGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class UpdateManyGoalResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    return GoalCrudResolver.prototype.updateManyGoal(ctx, info, args);
  }
}
