import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Belief } from "../../../models/Belief";
import { DeleteBeliefArgs } from "./args/DeleteBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class DeleteBeliefResolver {
  @TypeGraphQL.Mutation((_returns) => Belief, {
    nullable: true,
  })
  async deleteBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBeliefArgs
  ): Promise<Belief | null> {
    return BeliefCrudResolver.prototype.deleteBelief(ctx, info, args);
  }
}
