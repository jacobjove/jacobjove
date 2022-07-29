import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Identity } from "../../../models/Identity";
import { CreateIdentityArgs } from "./args/CreateIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class CreateIdentityResolver {
  @TypeGraphQL.Mutation((_returns) => Identity, { nullable: false })
  async createIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateIdentityArgs
  ): Promise<Identity> {
    return IdentityCrudResolver.prototype.createIdentity(ctx, info, args);
  }
}
