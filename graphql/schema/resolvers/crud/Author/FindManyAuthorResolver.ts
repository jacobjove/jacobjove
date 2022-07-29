import { ApolloContext } from "@/graphql/context";
import { AuthorCrudResolver } from "@/graphql/schema/resolvers/crud/Author/AuthorCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Author } from "../../../models/Author";
import { FindManyAuthorArgs } from "./args/FindManyAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class FindManyAuthorResolver {
  @TypeGraphQL.Query((_returns) => [Author], { nullable: false })
  async authors(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAuthorArgs
  ): Promise<Author[]> {
    return AuthorCrudResolver.prototype.authors(ctx, info, args);
  }
}
