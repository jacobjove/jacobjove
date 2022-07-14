import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { FindUniqueAuthorArgs } from "./args/FindUniqueAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class FindUniqueAuthorResolver {
  @TypeGraphQL.Query((_returns) => Author, {
    nullable: true,
  })
  async author(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAuthorArgs
  ): Promise<Author | null> {
    return AuthorCrudResolver.prototype.author(ctx, info, args);
  }
}
