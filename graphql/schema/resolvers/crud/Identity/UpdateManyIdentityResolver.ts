import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Identity } from "../../../models/Identity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyIdentityArgs } from "./args/UpdateManyIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class UpdateManyIdentityResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    return IdentityCrudResolver.prototype.updateManyIdentity(ctx, info, args);
  }
}
