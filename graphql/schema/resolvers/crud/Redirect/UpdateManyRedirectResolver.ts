import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyRedirectArgs } from "./args/UpdateManyRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class UpdateManyRedirectResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    return RedirectCrudResolver.prototype.updateManyRedirect(ctx, info, args);
  }
}
