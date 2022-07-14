import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Bookshelf } from "../../../models/Bookshelf";
import { FindManyBookshelfArgs } from "./args/FindManyBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class FindManyBookshelfResolver {
  @TypeGraphQL.Query((_returns) => [Bookshelf], {
    nullable: false,
  })
  async bookshelves(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookshelfArgs
  ): Promise<Bookshelf[]> {
    return BookshelfCrudResolver.prototype.bookshelves(ctx, info, args);
  }
}
