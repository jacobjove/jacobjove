import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Author } from "../../../models/Author";
import { UpsertAuthorArgs } from "./args/UpsertAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class UpsertAuthorResolver {
  @TypeGraphQL.Mutation((_returns) => Author, {
    nullable: false,
  })
  async upsertAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAuthorArgs
  ): Promise<Author> {
    return AuthorCrudResolver.prototype.upsertAuthor(ctx, info, args);
  }
}
