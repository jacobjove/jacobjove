import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Belief } from "../../../models/Belief";
import { AggregateBelief } from "../../outputs/AggregateBelief";
import { AggregateBeliefArgs } from "./args/AggregateBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class AggregateBeliefResolver {
  @TypeGraphQL.Query((_returns) => AggregateBelief, { nullable: false })
  async aggregateBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBeliefArgs
  ): Promise<AggregateBelief> {
    return BeliefCrudResolver.prototype.aggregateBelief(ctx, info, args);
  }
}
