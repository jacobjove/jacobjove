import { GqlContext } from "@/graphql/context";
import { Identity } from "@/graphql/schema/generated/models/identity.model";
import { toggleSelection } from "@/graphql/schema/helpers";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Identity)
export class IdentityToggleResolver {
  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: false })
  async toggleIdentity(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Arg("identityId", () => String) identityId: string,
    @TypeGraphQL.Arg("archivedAt", { nullable: true }) archivedAt: null | Date
  ): Promise<Identity> {
    return toggleSelection("identities", ctx, info, identityId, archivedAt) as Promise<Identity>;
  }
}
