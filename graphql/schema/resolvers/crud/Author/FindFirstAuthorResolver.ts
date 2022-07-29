import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../../../models/Author";
import { FindFirstAuthorArgs } from "./args/FindFirstAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class FindFirstAuthorResolver {
  @TypeGraphQL.Query((_returns) => Author, { nullable: true })
  async findFirstAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAuthorArgs
  ): Promise<Author | null> {
    return AuthorCrudResolver.prototype.findFirstAuthor(ctx, info, args);
  }
}
