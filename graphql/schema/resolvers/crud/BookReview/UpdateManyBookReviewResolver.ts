import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReview } from "../../../models/BookReview";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyBookReviewArgs } from "./args/UpdateManyBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class UpdateManyBookReviewResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    return BookReviewCrudResolver.prototype.updateManyBookReview(ctx, info, args);
  }
}
