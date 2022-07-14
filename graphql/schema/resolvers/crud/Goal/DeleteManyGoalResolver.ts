import { ApolloContext } from "@/graphql/context";
import { GoalCrudResolver } from "@/graphql/schema/resolvers/crud/Goal/GoalCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Goal } from "../../../models/Goal";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyGoalArgs } from "./args/DeleteManyGoalArgs";

@TypeGraphQL.Resolver((_of) => Goal)
export class DeleteManyGoalResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyGoal(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyGoalArgs
  ): Promise<AffectedRowsOutput> {
    return GoalCrudResolver.prototype.deleteManyGoal(ctx, info, args);
  }
}
