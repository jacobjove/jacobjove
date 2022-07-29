import { ApolloContext } from "@/graphql/context";
import { BeliefCrudResolver } from "@/graphql/schema/resolvers/crud/Belief/BeliefCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Belief } from "../../../models/Belief";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyBeliefArgs } from "./args/DeleteManyBeliefArgs";

@TypeGraphQL.Resolver((_of) => Belief)
export class DeleteManyBeliefResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBeliefArgs
  ): Promise<AffectedRowsOutput> {
    return BeliefCrudResolver.prototype.deleteManyBelief(ctx, info, args);
  }
}
