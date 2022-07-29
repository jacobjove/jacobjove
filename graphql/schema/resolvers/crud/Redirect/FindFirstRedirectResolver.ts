import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { FindFirstRedirectArgs } from "./args/FindFirstRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class FindFirstRedirectResolver {
  @TypeGraphQL.Query((_returns) => Redirect, { nullable: true })
  async findFirstRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRedirectArgs
  ): Promise<Redirect | null> {
    return RedirectCrudResolver.prototype.findFirstRedirect(ctx, info, args);
  }
}
