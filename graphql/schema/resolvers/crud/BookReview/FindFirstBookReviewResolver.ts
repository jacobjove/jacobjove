import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReview } from "../../../models/BookReview";
import { FindFirstBookReviewArgs } from "./args/FindFirstBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class FindFirstBookReviewResolver {
  @TypeGraphQL.Query((_returns) => BookReview, { nullable: true })
  async findFirstBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookReviewArgs
  ): Promise<BookReview | null> {
    return BookReviewCrudResolver.prototype.findFirstBookReview(ctx, info, args);
  }
}
