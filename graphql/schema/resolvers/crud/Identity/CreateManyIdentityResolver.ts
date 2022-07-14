import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Identity } from "../../../models/Identity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyIdentityArgs } from "./args/CreateManyIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class CreateManyIdentityResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    return IdentityCrudResolver.prototype.createManyIdentity(ctx, info, args);
  }
}
