import { GqlContext } from "@/graphql/context";
import { BookReview, Reading } from "@/graphql/schema/generated/models";
import { Book } from "@/graphql/schema/generated/models/book.model";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => BookReview)
export class BookReviewRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Book, { nullable: false })
  async book(
    @TypeGraphQL.Root() bookReview: BookReview,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Book> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() bookReview: BookReview,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Reading, { nullable: true })
  async reading(
    @TypeGraphQL.Root() bookReview: BookReview,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Reading | null> {
    throw new Error("Not implemented");
  }
}
