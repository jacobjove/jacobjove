import { ApolloContext } from "@/graphql/context";
import { BookReviewCrudResolver } from "@/graphql/schema/resolvers/crud/BookReview/BookReviewCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { BookReview } from "../../../models/BookReview";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyBookReviewArgs } from "./args/CreateManyBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class CreateManyBookReviewResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    return BookReviewCrudResolver.prototype.createManyBookReview(ctx, info, args);
  }
}
