import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Bookshelf } from "../../../models/Bookshelf";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookshelf } from "../../outputs/AggregateBookshelf";
import { BookshelfGroupBy } from "../../outputs/BookshelfGroupBy";
import { AggregateBookshelfArgs } from "./args/AggregateBookshelfArgs";
import { CreateBookshelfArgs } from "./args/CreateBookshelfArgs";
import { CreateManyBookshelfArgs } from "./args/CreateManyBookshelfArgs";
import { DeleteBookshelfArgs } from "./args/DeleteBookshelfArgs";
import { DeleteManyBookshelfArgs } from "./args/DeleteManyBookshelfArgs";
import { FindFirstBookshelfArgs } from "./args/FindFirstBookshelfArgs";
import { FindManyBookshelfArgs } from "./args/FindManyBookshelfArgs";
import { FindUniqueBookshelfArgs } from "./args/FindUniqueBookshelfArgs";
import { GroupByBookshelfArgs } from "./args/GroupByBookshelfArgs";
import { UpdateBookshelfArgs } from "./args/UpdateBookshelfArgs";
import { UpdateManyBookshelfArgs } from "./args/UpdateManyBookshelfArgs";
import { UpsertBookshelfArgs } from "./args/UpsertBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class BookshelfCrudResolver {
  @TypeGraphQL.Query((_returns) => Bookshelf, {
    nullable: true,
  })
  async bookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookshelfArgs
  ): Promise<Bookshelf | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Bookshelf, {
    nullable: true,
  })
  async findFirstBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookshelfArgs
  ): Promise<Bookshelf | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Bookshelf], {
    nullable: false,
  })
  async bookshelves(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookshelfArgs
  ): Promise<Bookshelf[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, {
    nullable: false,
  })
  async createBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookshelfArgs
  ): Promise<Bookshelf> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, {
    nullable: true,
  })
  async deleteBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookshelfArgs
  ): Promise<Bookshelf | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, {
    nullable: true,
  })
  async updateBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookshelfArgs
  ): Promise<Bookshelf | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, {
    nullable: false,
  })
  async upsertBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookshelfArgs
  ): Promise<Bookshelf> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateBookshelf, {
    nullable: false,
  })
  async aggregateBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookshelfArgs
  ): Promise<AggregateBookshelf> {
    return getPrismaFromContext(ctx).bookshelf.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [BookshelfGroupBy], {
    nullable: false,
  })
  async groupByBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByBookshelfArgs
  ): Promise<BookshelfGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).bookshelf.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
