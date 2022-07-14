import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { DeleteBookReviewArgs } from "./args/DeleteBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class DeleteBookReviewResolver {
  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: true,
  })
  async deleteBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookReviewArgs
  ): Promise<BookReview | null> {
    return BookReviewCrudResolver.prototype.deleteBookReview(ctx, info, args);
  }
}
