import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Redirect } from "../../../models/Redirect";
import { DeleteRedirectArgs } from "./args/DeleteRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class DeleteRedirectResolver {
  @TypeGraphQL.Mutation((_returns) => Redirect, {
    nullable: true,
  })
  async deleteRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRedirectArgs
  ): Promise<Redirect | null> {
    return RedirectCrudResolver.prototype.deleteRedirect(ctx, info, args);
  }
}
