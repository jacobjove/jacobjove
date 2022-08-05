import { GqlContext } from "@/graphql/context";
import { BookReview } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookReview } from "../../outputs/AggregateBookReview";
import { AggregateBookReviewArgs } from "./args/AggregateBookReviewArgs";
import { CreateBookReviewArgs } from "./args/CreateBookReviewArgs";
import { CreateManyBookReviewArgs } from "./args/CreateManyBookReviewArgs";
import { DeleteBookReviewArgs } from "./args/DeleteBookReviewArgs";
import { DeleteManyBookReviewArgs } from "./args/DeleteManyBookReviewArgs";
import { FindFirstBookReviewArgs } from "./args/FindFirstBookReviewArgs";
import { FindManyBookReviewArgs } from "./args/FindManyBookReviewArgs";
import { FindUniqueBookReviewArgs } from "./args/FindUniqueBookReviewArgs";
import { UpdateBookReviewArgs } from "./args/UpdateBookReviewArgs";
import { UpdateManyBookReviewArgs } from "./args/UpdateManyBookReviewArgs";
import { UpsertBookReviewArgs } from "./args/UpsertBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class BookReviewCrudResolver {
  @TypeGraphQL.Query((_returns) => BookReview, { nullable: true })
  async bookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookReviewArgs
  ): Promise<BookReview | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => BookReview, { nullable: true })
  async findFirstBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookReviewArgs
  ): Promise<BookReview | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [BookReview], { nullable: false })
  async bookReviews(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookReviewArgs
  ): Promise<BookReview[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: false })
  async createBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookReviewArgs
  ): Promise<BookReview> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: true })
  async deleteBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookReviewArgs
  ): Promise<BookReview | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: true })
  async updateBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookReviewArgs
  ): Promise<BookReview | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: false })
  async upsertBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookReviewArgs
  ): Promise<BookReview> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateBookReview, { nullable: false })
  async aggregateBookReview(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookReviewArgs
  ): Promise<AggregateBookReview> {
    throw new Error("Not implemented");
  }
}
