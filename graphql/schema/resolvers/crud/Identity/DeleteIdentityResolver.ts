import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Identity } from "../../../models/Identity";
import { DeleteIdentityArgs } from "./args/DeleteIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class DeleteIdentityResolver {
  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: true })
  async deleteIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteIdentityArgs
  ): Promise<Identity | null> {
    return IdentityCrudResolver.prototype.deleteIdentity(ctx, info, args);
  }
}
