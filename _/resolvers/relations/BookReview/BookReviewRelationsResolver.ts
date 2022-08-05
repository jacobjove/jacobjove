import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "@/graphql/schema/generated/models/book.model";
import { BookReview } from "@/graphql/schema/generated/models";
import { Reading } from "@/graphql/schema/generated/models";
import { User } from "@/graphql/schema/generated/models/user.model";

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
