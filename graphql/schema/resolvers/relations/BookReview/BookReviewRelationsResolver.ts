import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql";
import { getPrismaFromContext } from "../../../helpers";
import { Book } from "../../../models/Book";
import { BookReview } from "../../../models/BookReview";
import { Reading } from "../../../models/Reading";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver((_of) => BookReview)
export class BookReviewRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Book, {
    nullable: false,
  })
  async book(
    @TypeGraphQL.Root() bookReview: BookReview,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Book> {
    return getPrismaFromContext(ctx)
      .bookReview.findUnique({
        where: {
          id: bookReview.id,
        },
      })
      .book({});
  }

  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() bookReview: BookReview,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    return getPrismaFromContext(ctx)
      .bookReview.findUnique({
        where: {
          id: bookReview.id,
        },
      })
      .user({});
  }

  @TypeGraphQL.FieldResolver((_type) => Reading, {
    nullable: true,
  })
  async reading(
    @TypeGraphQL.Root() bookReview: BookReview,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Reading | null> {
    throw new Error("Not implemented");
    // return BookReviewCrudResolver.prototype.book(ctx, info, args);
  }
}
