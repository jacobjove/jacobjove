import { GqlContext } from "@/graphql/context";
import { Authorship } from "@/graphql/schema/generated/models";
import { Author } from "@/graphql/schema/generated/models/author.model";
import { Book } from "@/graphql/schema/generated/models/book.model";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver((_of) => Authorship)
export class AuthorshipRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Author, { nullable: false })
  async author(
    @TypeGraphQL.Root() authorship: Authorship,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Author> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Book, { nullable: false })
  async book(
    @TypeGraphQL.Root() authorship: Authorship,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Book> {
    throw new Error("Not implemented");
  }
}
