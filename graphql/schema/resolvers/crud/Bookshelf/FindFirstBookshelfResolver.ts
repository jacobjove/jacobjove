import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Bookshelf } from "../../../models/Bookshelf";
import { FindFirstBookshelfArgs } from "./args/FindFirstBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class FindFirstBookshelfResolver {
  @TypeGraphQL.Query((_returns) => Bookshelf, {
    nullable: true,
  })
  async findFirstBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookshelfArgs
  ): Promise<Bookshelf | null> {
    return BookshelfCrudResolver.prototype.findFirstBookshelf(ctx, info, args);
  }
}
