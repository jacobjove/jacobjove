import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Author } from "../../../models/Author";
import { Authorship } from "../../../models/Authorship";
import { Book } from "../../../models/Book";

@TypeGraphQL.Resolver((_of) => Authorship)
export class AuthorshipRelationsResolver {
  @TypeGraphQL.FieldResolver(() => Author, { nullable: false })
  async author(
    @TypeGraphQL.Root() authorship: Authorship,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Author> {
    return getPrismaFromContext(ctx)
      .authorship.findUnique({
        where: {
          id: authorship.id,
        },
      })
      .author({});
  }

  @TypeGraphQL.FieldResolver(() => Book, { nullable: false })
  async book(
    @TypeGraphQL.Root() authorship: Authorship,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<Book> {
    throw new Error("Not implemented");
    // return AuthorshipCrudResolver.prototype.author(ctx, info, args);
  }
}
