import { ApolloContext } from "@/graphql/context";
import { AuthorshipCrudResolver } from "@/graphql/schema/resolvers/crud/Authorship/AuthorshipCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Authorship } from "../../../models/Authorship";
import { CreateAuthorshipArgs } from "./args/CreateAuthorshipArgs";

@TypeGraphQL.Resolver((_of) => Authorship)
export class CreateAuthorshipResolver {
  @TypeGraphQL.Mutation((_returns) => Authorship, { nullable: false })
  async createAuthorship(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAuthorshipArgs
  ): Promise<Authorship> {
    return AuthorshipCrudResolver.prototype.createAuthorship(ctx, info, args);
  }
}
