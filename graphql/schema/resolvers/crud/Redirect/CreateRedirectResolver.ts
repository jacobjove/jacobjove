import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { CreateRedirectArgs } from "./args/CreateRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class CreateRedirectResolver {
  @TypeGraphQL.Mutation((_returns) => Redirect, { nullable: false })
  async createRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRedirectArgs
  ): Promise<Redirect> {
    return RedirectCrudResolver.prototype.createRedirect(ctx, info, args);
  }
}
