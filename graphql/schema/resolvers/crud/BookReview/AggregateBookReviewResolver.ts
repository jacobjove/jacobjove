import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { AggregateBookReview } from "../../outputs/AggregateBookReview";
import { AggregateBookReviewArgs } from "./args/AggregateBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class AggregateBookReviewResolver {
  @TypeGraphQL.Query((_returns) => AggregateBookReview, {
    nullable: false,
  })
  async aggregateBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookReviewArgs
  ): Promise<AggregateBookReview> {
    return BookReviewCrudResolver.prototype.aggregateBookReview(ctx, info, args);
  }
}
