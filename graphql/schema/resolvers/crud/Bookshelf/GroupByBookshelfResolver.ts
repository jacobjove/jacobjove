import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Bookshelf } from "../../../models/Bookshelf";
import { BookshelfGroupBy } from "../../outputs/BookshelfGroupBy";
import { GroupByBookshelfArgs } from "./args/GroupByBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class GroupByBookshelfResolver {
  @TypeGraphQL.Query((_returns) => [BookshelfGroupBy], {
    nullable: false,
  })
  async groupByBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookshelfArgs
  ): Promise<BookshelfGroupBy[]> {
    return BookshelfCrudResolver.prototype.groupByBookshelf(ctx, info, args);
  }
}
