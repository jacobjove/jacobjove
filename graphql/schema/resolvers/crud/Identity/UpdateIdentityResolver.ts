import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Identity } from "../../../models/Identity";
import { UpdateIdentityArgs } from "./args/UpdateIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class UpdateIdentityResolver {
  @TypeGraphQL.Mutation((_returns) => Identity, {
    nullable: true,
  })
  async updateIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateIdentityArgs
  ): Promise<Identity | null> {
    return IdentityCrudResolver.prototype.updateIdentity(ctx, info, args);
  }
}
