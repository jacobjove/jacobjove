import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Identity } from "../../../models/Identity";
import { FindFirstIdentityArgs } from "./args/FindFirstIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class FindFirstIdentityResolver {
  @TypeGraphQL.Query((_returns) => Identity, {
    nullable: true,
  })
  async findFirstIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstIdentityArgs
  ): Promise<Identity | null> {
    return IdentityCrudResolver.prototype.findFirstIdentity(ctx, info, args);
  }
}
