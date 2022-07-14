import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Bookshelf } from "../../../models/Bookshelf";
import { FindUniqueBookshelfArgs } from "./args/FindUniqueBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class FindUniqueBookshelfResolver {
  @TypeGraphQL.Query((_returns) => Bookshelf, {
    nullable: true,
  })
  async bookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookshelfArgs
  ): Promise<Bookshelf | null> {
    return BookshelfCrudResolver.prototype.bookshelf(ctx, info, args);
  }
}
