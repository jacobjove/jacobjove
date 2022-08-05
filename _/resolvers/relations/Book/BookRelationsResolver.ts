import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Authorship } from "@/graphql/schema/generated/models";
import { Book } from "@/graphql/schema/generated/models/book.model";
import { BookReview } from "@/graphql/schema/generated/models";
import { Reading } from "@/graphql/schema/generated/models";
import { Shelving } from "@/graphql/schema/generated/models";
import { BookAuthorshipsArgs } from "./args/BookAuthorshipsArgs";
import { BookBookReviewArgs } from "./args/BookBookReviewArgs";
import { BookReadingsArgs } from "./args/BookReadingsArgs";
import { BookShelvingsArgs } from "./args/BookShelvingsArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class BookRelationsResolver {
  @TypeGraphQL.FieldResolver(() => [Authorship], { nullable: false })
  async authorships(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: BookAuthorshipsArgs
  ): Promise<Authorship[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Reading], { nullable: false })
  async readings(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: BookReadingsArgs
  ): Promise<Reading[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [Shelving], { nullable: false })
  async shelvings(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: BookShelvingsArgs
  ): Promise<Shelving[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [BookReview], { nullable: false })
  async BookReview(
    @TypeGraphQL.Root() book: Book,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: BookBookReviewArgs
  ): Promise<BookReview[]> {
    throw new Error("Not implemented");
  }
}
