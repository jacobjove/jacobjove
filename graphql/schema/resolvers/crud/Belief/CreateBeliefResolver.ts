import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Belief } from "../../../models/Belief";
import { CreateBeliefArgs } from "./args/CreateBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class CreateBeliefResolver {
  @TypeGraphQL.Mutation((_returns) => Belief, {
    nullable: false,
  })
  async createBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBeliefArgs
  ): Promise<Belief> {
    return BeliefCrudResolver.prototype.createBelief(ctx, info, args);
  }
}
