import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Book } from "@/graphql/schema/generated/models/book.model";
import { BookReview } from "@/graphql/schema/generated/models";
import { Reading } from "@/graphql/schema/generated/models";
import { User } from "@/graphql/schema/generated/models/user.model";

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
