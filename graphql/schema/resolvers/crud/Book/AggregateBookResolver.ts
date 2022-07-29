import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "../../../models/Book";
import { AggregateBook } from "../../outputs/AggregateBook";
import { AggregateBookArgs } from "./args/AggregateBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class AggregateBookResolver {
  @TypeGraphQL.Query((_returns) => AggregateBook, { nullable: false })
  async aggregateBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookArgs
  ): Promise<AggregateBook> {
    return BookCrudResolver.prototype.aggregateBook(ctx, info, args);
  }
}
