import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { UpdateRedirectArgs } from "./args/UpdateRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class UpdateRedirectResolver {
  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: true })
  async updateRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRedirectArgs
  ): Promise<Redirect | null> {
    return RedirectCrudResolver.prototype.updateRedirect(ctx, info, args);
  }
}
