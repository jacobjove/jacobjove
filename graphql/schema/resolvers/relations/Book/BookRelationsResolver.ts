import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Authorship } from "../../../models/Authorship";
import { Book } from "../../../models/Book";
import { BookReview } from "../../../models/BookReview";
import { Reading } from "../../../models/Reading";
import { Shelving } from "../../../models/Shelving";
import { BookAuthorshipsArgs } from "./args/BookAuthorshipsArgs";
import { BookBookReviewArgs } from "./args/BookBookReviewArgs";
import { BookReadingsArgs } from "./args/BookReadingsArgs";
import { BookShelvingsArgs } from "./args/BookShelvingsArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Authorship], { nullable: false })
  async authorships(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: BookAuthorshipsArgs
  ): Promise<Authorship[]> {
    return getPrismaFromContext(ctx)
      .book.findUnique({
        where: {
          id: book.id,
        },
      })
      .authorships(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [Reading], { nullable: false })
  async readings(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: BookReadingsArgs
  ): Promise<Reading[]> {
    return getPrismaFromContext(ctx)
      .book.findUnique({
        where: {
          id: book.id,
        },
      })
      .readings(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [Shelving], { nullable: false })
  async shelvings(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: BookShelvingsArgs
  ): Promise<Shelving[]> {
    return getPrismaFromContext(ctx)
      .book.findUnique({
        where: {
          id: book.id,
        },
      })
      .shelvings(args);
  }

  @TypeGraphQL.FieldResolver((_type) => [BookReview], { nullable: false })
  async BookReview(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Args() args: BookBookReviewArgs
  ): Promise<BookReview[]> {
    throw new Error("Not implemented");
    // return BookCrudResolver.prototype.authorships(ctx, info, args);
  }
}
