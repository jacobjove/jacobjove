import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { DeleteAuthorArgs } from "./args/DeleteAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class DeleteAuthorResolver {
  @TypeGraphQL.Mutation((_returns) => Author, {
    nullable: true,
  })
  async deleteAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAuthorArgs
  ): Promise<Author | null> {
    return AuthorCrudResolver.prototype.deleteAuthor(ctx, info, args);
  }
}
