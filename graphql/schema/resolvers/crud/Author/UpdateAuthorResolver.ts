import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { UpdateAuthorArgs } from "./args/UpdateAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class UpdateAuthorResolver {
  @TypeGraphQL.Mutation((_returns) => Author, {
    nullable: true,
  })
  async updateAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAuthorArgs
  ): Promise<Author | null> {
    return AuthorCrudResolver.prototype.updateAuthor(ctx, info, args);
  }
}
