import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { BookReview } from "../../../models/BookReview";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookReview } from "../../outputs/AggregateBookReview";
import { BookReviewGroupBy } from "../../outputs/BookReviewGroupBy";
import { AggregateBookReviewArgs } from "./args/AggregateBookReviewArgs";
import { CreateBookReviewArgs } from "./args/CreateBookReviewArgs";
import { CreateManyBookReviewArgs } from "./args/CreateManyBookReviewArgs";
import { DeleteBookReviewArgs } from "./args/DeleteBookReviewArgs";
import { DeleteManyBookReviewArgs } from "./args/DeleteManyBookReviewArgs";
import { FindFirstBookReviewArgs } from "./args/FindFirstBookReviewArgs";
import { FindManyBookReviewArgs } from "./args/FindManyBookReviewArgs";
import { FindUniqueBookReviewArgs } from "./args/FindUniqueBookReviewArgs";
import { GroupByBookReviewArgs } from "./args/GroupByBookReviewArgs";
import { UpdateBookReviewArgs } from "./args/UpdateBookReviewArgs";
import { UpdateManyBookReviewArgs } from "./args/UpdateManyBookReviewArgs";
import { UpsertBookReviewArgs } from "./args/UpsertBookReviewArgs";

@TypeGraphQL.Resolver((_of) => BookReview)
export class BookReviewCrudResolver {
  @TypeGraphQL.Query((_returns) => BookReview, {
    nullable: true,
  })
  async bookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookReviewArgs
  ): Promise<BookReview | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => BookReview, {
    nullable: true,
  })
  async findFirstBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookReviewArgs
  ): Promise<BookReview | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [BookReview], {
    nullable: false,
  })
  async bookReviews(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookReviewArgs
  ): Promise<BookReview[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: false,
  })
  async createBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookReviewArgs
  ): Promise<BookReview> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: true,
  })
  async deleteBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookReviewArgs
  ): Promise<BookReview | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: true,
  })
  async updateBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookReviewArgs
  ): Promise<BookReview | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookReviewArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => BookReview, {
    nullable: false,
  })
  async upsertBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookReviewArgs
  ): Promise<BookReview> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateBookReview, {
    nullable: false,
  })
  async aggregateBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookReviewArgs
  ): Promise<AggregateBookReview> {
    return getPrismaFromContext(ctx).bookReview.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [BookReviewGroupBy], {
    nullable: false,
  })
  async groupByBookReview(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookReviewArgs
  ): Promise<BookReviewGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookReview.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
