import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Identity } from "../../../models/Identity";
import { FindManyIdentityArgs } from "./args/FindManyIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class FindManyIdentityResolver {
  @TypeGraphQL.Query((_returns) => [Identity], { nullable: false })
  async identities(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyIdentityArgs
  ): Promise<Identity[]> {
    return IdentityCrudResolver.prototype.identities(ctx, info, args);
  }
}
