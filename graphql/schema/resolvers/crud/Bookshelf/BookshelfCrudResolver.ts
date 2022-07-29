import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Bookshelf } from "../../../models/Bookshelf";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBookshelf } from "../../outputs/AggregateBookshelf";
import { AggregateBookshelfArgs } from "./args/AggregateBookshelfArgs";
import { CreateBookshelfArgs } from "./args/CreateBookshelfArgs";
import { CreateManyBookshelfArgs } from "./args/CreateManyBookshelfArgs";
import { DeleteBookshelfArgs } from "./args/DeleteBookshelfArgs";
import { DeleteManyBookshelfArgs } from "./args/DeleteManyBookshelfArgs";
import { FindFirstBookshelfArgs } from "./args/FindFirstBookshelfArgs";
import { FindManyBookshelfArgs } from "./args/FindManyBookshelfArgs";
import { FindUniqueBookshelfArgs } from "./args/FindUniqueBookshelfArgs";
import { UpdateBookshelfArgs } from "./args/UpdateBookshelfArgs";
import { UpdateManyBookshelfArgs } from "./args/UpdateManyBookshelfArgs";
import { UpsertBookshelfArgs } from "./args/UpsertBookshelfArgs";

@TypeGraphQL.Resolver((_of) => Bookshelf)
export class BookshelfCrudResolver {
  @TypeGraphQL.Query((_returns) => Bookshelf, { nullable: true })
  async bookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookshelfArgs
  ): Promise<Bookshelf | null> {
    return getPrismaFromContext(ctx).bookshelf.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Bookshelf, { nullable: true })
  async findFirstBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookshelfArgs
  ): Promise<Bookshelf | null> {
    return getPrismaFromContext(ctx).bookshelf.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Bookshelf], { nullable: false })
  async bookshelves(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookshelfArgs
  ): Promise<Bookshelf[]> {
    return getPrismaFromContext(ctx).bookshelf.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: false })
  async createBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookshelfArgs
  ): Promise<Bookshelf> {
    return getPrismaFromContext(ctx).bookshelf.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookshelf.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: true })
  async deleteBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookshelfArgs
  ): Promise<Bookshelf | null> {
    return getPrismaFromContext(ctx).bookshelf.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: true })
  async updateBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookshelfArgs
  ): Promise<Bookshelf | null> {
    return getPrismaFromContext(ctx).bookshelf.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookshelf.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).bookshelf.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: false })
  async upsertBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookshelfArgs
  ): Promise<Bookshelf> {
    return getPrismaFromContext(ctx).bookshelf.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateBookshelf, { nullable: false })
  async aggregateBookshelf(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookshelfArgs
  ): Promise<AggregateBookshelf> {
    return getPrismaFromContext(ctx).bookshelf.aggregate({
      ...args,
    });
  }
}
