import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { AggregateRedirect } from "../../outputs/AggregateRedirect";
import { AggregateRedirectArgs } from "./args/AggregateRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class AggregateRedirectResolver {
  @TypeGraphQL.Query((_returns) => AggregateRedirect, { nullable: false })
  async aggregateRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRedirectArgs
  ): Promise<AggregateRedirect> {
    return RedirectCrudResolver.prototype.aggregateRedirect(ctx, info, args);
  }
}
