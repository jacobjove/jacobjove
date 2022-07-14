import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { BookReview } from "../../../models/BookReview";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyBookReviewArgs } from "./args/DeleteManyBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class DeleteManyBookReviewResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    return BookReviewCrudResolver.prototype.deleteManyBookReview(ctx, info, args);
  }
}
