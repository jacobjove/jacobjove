import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Identity } from "../../../models/Identity";
import { FindUniqueIdentityArgs } from "./args/FindUniqueIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class FindUniqueIdentityResolver {
  @TypeGraphQL.Query((_returns) => Identity, { nullable: true })
  async identity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueIdentityArgs
  ): Promise<Identity | null> {
    return IdentityCrudResolver.prototype.identity(ctx, info, args);
  }
}
