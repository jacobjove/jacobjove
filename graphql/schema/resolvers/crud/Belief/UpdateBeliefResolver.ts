import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Belief } from "../../../models/Belief";
import { UpdateBeliefArgs } from "./args/UpdateBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class UpdateBeliefResolver {
  @TypeGraphQL.Mutation((_returns) => Belief, {
    nullable: true,
  })
  async updateBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBeliefArgs
  ): Promise<Belief | null> {
    return BeliefCrudResolver.prototype.updateBelief(ctx, info, args);
  }
}
