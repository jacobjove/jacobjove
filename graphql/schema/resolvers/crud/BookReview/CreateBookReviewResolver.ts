import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { CreateBookReviewArgs } from "./args/CreateBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class CreateBookReviewResolver {
  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: false,
  })
  async createBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookReviewArgs
  ): Promise<BookReview> {
    return BookReviewCrudResolver.prototype.createBookReview(ctx, info, args);
  }
}
