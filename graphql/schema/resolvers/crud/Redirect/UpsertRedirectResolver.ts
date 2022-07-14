import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Redirect } from "../../../models/Redirect";
import { UpsertRedirectArgs } from "./args/UpsertRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class UpsertRedirectResolver {
  @TypeGraphQL.Mutation((_returns) => Redirect, {
    nullable: false,
  })
  async upsertRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRedirectArgs
  ): Promise<Redirect> {
    return RedirectCrudResolver.prototype.upsertRedirect(ctx, info, args);
  }
}
