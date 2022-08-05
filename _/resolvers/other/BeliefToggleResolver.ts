import { GqlContext } from "@/graphql/context";
import { Belief } from "@/graphql/schema/generated/models/belief.model";
import { toggleSelection } from "@/graphql/schema/helpers";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Belief)
export class BeliefToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Belief, { nullable: false })
  async toggleBelief(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("beliefId", () => String) beliefId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Belief> {
    return toggleSelection("beliefs", ctx, info, beliefId, archivedAt) as Promise<Belief>;
  }
}
