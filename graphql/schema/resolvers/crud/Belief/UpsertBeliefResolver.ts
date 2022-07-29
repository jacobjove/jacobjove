import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Belief } from "../../../models/Belief";
import { UpsertBeliefArgs } from "./args/UpsertBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class UpsertBeliefResolver {
  @TypeGraphQL.Mutation((_returns) => Belief, { nullable: false })
  async upsertBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBeliefArgs
  ): Promise<Belief> {
    return BeliefCrudResolver.prototype.upsertBelief(ctx, info, args);
  }
}
