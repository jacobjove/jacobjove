import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReview } from "../../../models/BookReview";
import { FindUniqueBookReviewArgs } from "./args/FindUniqueBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class FindUniqueBookReviewResolver {
  @TypeGraphQL.Query((_returns) => BookReview, { nullable: true })
  async bookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookReviewArgs
  ): Promise<BookReview | null> {
    return BookReviewCrudResolver.prototype.bookReview(ctx, info, args);
  }
}
