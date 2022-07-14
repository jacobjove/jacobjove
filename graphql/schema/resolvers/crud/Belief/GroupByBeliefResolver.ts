import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Belief } from "../../../models/Belief";
import { BeliefGroupBy } from "../../outputs/BeliefGroupBy";
import { GroupByBeliefArgs } from "./args/GroupByBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class GroupByBeliefResolver {
  @TypeGraphQL.Query((_returns) => [BeliefGroupBy], {
    nullable: false,
  })
  async groupByBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBeliefArgs
  ): Promise<BeliefGroupBy[]> {
    return BeliefCrudResolver.prototype.groupByBelief(ctx, info, args);
  }
}
