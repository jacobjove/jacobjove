import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Belief } from "../../../models/Belief";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyBeliefArgs } from "./args/CreateManyBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class CreateManyBeliefResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    return BeliefCrudResolver.prototype.createManyBelief(ctx, info, args);
  }
}
