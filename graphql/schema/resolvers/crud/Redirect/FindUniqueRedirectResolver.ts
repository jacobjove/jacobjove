import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { FindUniqueRedirectArgs } from "./args/FindUniqueRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class FindUniqueRedirectResolver {
  @TypeGraphQL.Query((_returns) => Redirect, { nullable: true })
  async redirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRedirectArgs
  ): Promise<Redirect | null> {
    return RedirectCrudResolver.prototype.redirect(ctx, info, args);
  }
}
