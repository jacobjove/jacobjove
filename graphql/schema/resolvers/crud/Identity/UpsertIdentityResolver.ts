import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Identity } from "../../../models/Identity";
import { UpsertIdentityArgs } from "./args/UpsertIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class UpsertIdentityResolver {
  @TypeGraphQL.Mutation((_returns) => Identity, {
    nullable: false,
  })
  async upsertIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertIdentityArgs
  ): Promise<Identity> {
    return IdentityCrudResolver.prototype.upsertIdentity(ctx, info, args);
  }
}
