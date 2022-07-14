import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { UpdateBookReviewArgs } from "./args/UpdateBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class UpdateBookReviewResolver {
  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: true,
  })
  async updateBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookReviewArgs
  ): Promise<BookReview | null> {
    return BookReviewCrudResolver.prototype.updateBookReview(ctx, info, args);
  }
}
