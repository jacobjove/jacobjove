import { ApolloContext } from "@/graphql/context";
import { RedirectCrudResolver } from "@/graphql/schema/resolvers/crud/Redirect/RedirectCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Redirect } from "../../../models/Redirect";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyRedirectArgs } from "./args/CreateManyRedirectArgs";

@TypeGraphQL.Resolver((_of) => Redirect)
export class CreateManyRedirectResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRedirect(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRedirectArgs
  ): Promise<AffectedRowsOutput> {
    return RedirectCrudResolver.prototype.createManyRedirect(ctx, info, args);
  }
}
