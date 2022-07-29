import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { FindManyRedirectArgs } from "./args/FindManyRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class FindManyRedirectResolver {
  @TypeGraphQL.Query((_returns) => [Redirect], { nullable: false })
  async redirects(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRedirectArgs
  ): Promise<Redirect[]> {
    return RedirectCrudResolver.prototype.redirects(ctx, info, args);
  }
}
