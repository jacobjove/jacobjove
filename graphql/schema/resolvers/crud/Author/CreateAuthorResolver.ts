import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../../../models/Author";
import { CreateAuthorArgs } from "./args/CreateAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class CreateAuthorResolver {
  @TypeGraphQL.Mutation((_returns) => Author, { nullable: false })
  async createAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAuthorArgs
  ): Promise<Author> {
    return AuthorCrudResolver.prototype.createAuthor(ctx, info, args);
  }
}
