import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Belief } from "../../../models/Belief";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyBeliefArgs } from "./args/UpdateManyBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class UpdateManyBeliefResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    return BeliefCrudResolver.prototype.updateManyBelief(ctx, info, args);
  }
}
