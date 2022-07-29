import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReview } from "../../../models/BookReview";
import { FindManyBookReviewArgs } from "./args/FindManyBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class FindManyBookReviewResolver {
  @TypeGraphQL.Query((_returns) => [BookReview], { nullable: false })
  async bookReviews(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookReviewArgs
  ): Promise<BookReview[]> {
    return BookReviewCrudResolver.prototype.bookReviews(ctx, info, args);
  }
}
