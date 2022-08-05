import { GqlContext } from "@/graphql/context";
import { BookReview, Reading } from "@/graphql/schema/generated/models";
import { Book } from "@/graphql/schema/generated/models/book.model";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Reading)
export class ReadingRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() reading: Reading,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Book, { nullable: false })
  async book(
    @TypeGraphQL.Root() reading: Reading,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Book> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => BookReview, { nullable: true })
  async review(
    @TypeGraphQL.Root() reading: Reading,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<BookReview | null> {
    throw new Error("Not implemented");
  }
}
