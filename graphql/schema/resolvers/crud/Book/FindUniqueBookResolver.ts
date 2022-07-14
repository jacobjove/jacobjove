import { ApolloContext } from "@/graphql/context";
import { BookCrudResolver } from "@/graphql/schema/resolvers/crud/Book/BookCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Book } from "../../../models/Book";
import { FindUniqueBookArgs } from "./args/FindUniqueBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class FindUniqueBookResolver {
  @TypeGraphQL.Query((_returns) => Book, {
    nullable: true,
  })
  async book(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookArgs
  ): Promise<Book | null> {
    return BookCrudResolver.prototype.book(ctx, info, args);
  }
}
