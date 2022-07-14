import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { BookGroupBy } from "../../outputs/BookGroupBy";
import { GroupByBookArgs } from "./args/GroupByBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class GroupByBookResolver {
  @TypeGraphQL.Query((_returns) => [BookGroupBy], {
    nullable: false,
  })
  async groupByBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookArgs
  ): Promise<BookGroupBy[]> {
    return BookCrudResolver.prototype.groupByBook(ctx, info, args);
  }
}
