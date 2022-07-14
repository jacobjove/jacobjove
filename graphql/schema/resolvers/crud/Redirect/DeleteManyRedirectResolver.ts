import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Redirect } from "../../../models/Redirect";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyRedirectArgs } from "./args/DeleteManyRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class DeleteManyRedirectResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    return RedirectCrudResolver.prototype.deleteManyRedirect(ctx, info, args);
  }
}
