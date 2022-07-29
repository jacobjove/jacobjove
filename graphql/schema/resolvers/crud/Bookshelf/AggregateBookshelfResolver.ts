import { ApolloContext } from "@/graphql/context";
import { BookshelfCrudResolver } from "@/graphql/schema/resolvers/crud/Bookshelf/BookshelfCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Bookshelf } from "../../../models/Bookshelf";
import { AggregateBookshelf } from "../../outputs/AggregateBookshelf";
import { AggregateBookshelfArgs } from "./args/AggregateBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class AggregateBookshelfResolver {
  @TypeGraphQL.Query((_returns) => AggregateBookshelf, { nullable: false })
  async aggregateBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookshelfArgs
  ): Promise<AggregateBookshelf> {
    return BookshelfCrudResolver.prototype.aggregateBookshelf(ctx, info, args);
  }
}
