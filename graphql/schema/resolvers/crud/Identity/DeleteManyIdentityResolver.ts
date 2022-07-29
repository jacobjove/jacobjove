import { ApolloContext } from "@/graphql/context";
import { IdentityCrudResolver } from "@/graphql/schema/resolvers/crud/Identity/IdentityCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Identity } from "../../../models/Identity";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyIdentityArgs } from "./args/DeleteManyIdentityArgs";

@TypeGraphQL.Resolver((_of) => Identity)
export class DeleteManyIdentityResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyIdentity(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyIdentityArgs
  ): Promise<AffectedRowsOutput> {
    return IdentityCrudResolver.prototype.deleteManyIdentity(ctx, info, args);
  }
}
