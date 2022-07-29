import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Belief } from "../../../models/Belief";
import { FindFirstBeliefArgs } from "./args/FindFirstBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class FindFirstBeliefResolver {
  @TypeGraphQL.Query((_returns) => Belief, { nullable: true })
  async findFirstBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBeliefArgs
  ): Promise<Belief | null> {
    return BeliefCrudResolver.prototype.findFirstBelief(ctx, info, args);
  }
}
