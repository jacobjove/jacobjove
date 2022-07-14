import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Redirect } from "../../../models/Redirect";
import { RedirectGroupBy } from "../../outputs/RedirectGroupBy";
import { GroupByRedirectArgs } from "./args/GroupByRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class GroupByRedirectResolver {
  @TypeGraphQL.Query((_returns) => [RedirectGroupBy], {
    nullable: false,
  })
  async groupByRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByRedirectArgs
  ): Promise<RedirectGroupBy[]> {
    return RedirectCrudResolver.prototype.groupByRedirect(ctx, info, args);
  }
}
