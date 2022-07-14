import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { UpsertBookReviewArgs } from "./args/UpsertBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class UpsertBookReviewResolver {
  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: false,
  })
  async upsertBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookReviewArgs
  ): Promise<BookReview> {
    return BookReviewCrudResolver.prototype.upsertBookReview(ctx, info, args);
  }
}
