import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { BookReview } from "../../../models/BookReview";
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
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookReviewArgs
  ): Promise<BookReview | null> {
    return getPrismaFromContext(ctx).bookReview.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => BookReview, { nullable: true })
  async findFirstBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookReviewArgs
  ): Promise<BookReview | null> {
    return getPrismaFromContext(ctx).bookReview.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [BookReview], { nullable: false })
  async bookReviews(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookReviewArgs
  ): Promise<BookReview[]> {
    return getPrismaFromContext(ctx).bookReview.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: false })
  async createBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookReviewArgs
  ): Promise<BookReview> {
    return getPrismaFromContext(ctx).bookReview.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookReview.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: true })
  async deleteBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookReviewArgs
  ): Promise<BookReview | null> {
    return getPrismaFromContext(ctx).bookReview.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: true })
  async updateBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookReviewArgs
  ): Promise<BookReview | null> {
    return getPrismaFromContext(ctx).bookReview.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookReview.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookReview.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, { nullable: false })
  async upsertBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookReviewArgs
  ): Promise<BookReview> {
    return getPrismaFromContext(ctx).bookReview.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateBookReview, { nullable: false })
  async aggregateBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookReviewArgs
  ): Promise<AggregateBookReview> {
    return getPrismaFromContext(ctx).bookReview.aggregate({
      ...args,
    });
  }
}
