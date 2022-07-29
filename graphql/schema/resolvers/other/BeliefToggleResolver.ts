import { ApolloContext } from "@/graphql/context";
import { toggleSelection } from "@/graphql/schema/helpers";
import { Belief } from "@/graphql/schema/models/Belief";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Belief)
export class BeliefToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Belief, { nullable: false })
  async toggleBelief(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("beliefId", () => String) beliefId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Belief> {
    return toggleSelection("beliefs", ctx, info, beliefId, archivedAt) as Promise<Belief>;
  }
}
