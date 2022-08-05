import { GqlContext } from "@/graphql/context";
import { toggleSelection } from "@/graphql/schema/helpers";
import { Mantra } from "@/graphql/schema/generated/models/mantra.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Mantra)
export class MantraToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Mantra, { nullable: false })
  async toggleMantra(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("mantraId", () => String) mantraId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Mantra> {
    return toggleSelection("mantras", ctx, info, mantraId, archivedAt) as Promise<Mantra>;
  }
}
