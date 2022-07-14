import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { BookReviewGroupBy } from "../../outputs/BookReviewGroupBy";
import { GroupByBookReviewArgs } from "./args/GroupByBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class GroupByBookReviewResolver {
  @TypeGraphQL.Query((_returns) => [BookReviewGroupBy], {
    nullable: false,
  })
  async groupByBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookReviewArgs
  ): Promise<BookReviewGroupBy[]> {
    return BookReviewCrudResolver.prototype.groupByBookReview(ctx, info, args);
  }
}
