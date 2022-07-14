import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Belief } from "../../../models/Belief";
import { FindUniqueBeliefArgs } from "./args/FindUniqueBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class FindUniqueBeliefResolver {
  @TypeGraphQL.Query((_returns) => Belief, {
    nullable: true,
  })
  async belief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBeliefArgs
  ): Promise<Belief | null> {
    return BeliefCrudResolver.prototype.belief(ctx, info, args);
  }
}
