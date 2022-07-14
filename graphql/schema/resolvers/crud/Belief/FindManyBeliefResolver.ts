import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Belief } from "../../../models/Belief";
import { FindManyBeliefArgs } from "./args/FindManyBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class FindManyBeliefResolver {
  @TypeGraphQL.Query((_returns) => [Belief], {
    nullable: false,
  })
  async beliefs(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBeliefArgs
  ): Promise<Belief[]> {
    return BeliefCrudResolver.prototype.beliefs(ctx, info, args);
  }
}
