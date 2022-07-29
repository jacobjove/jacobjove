import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Book } from "../../../models/Book";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateBook } from "../../outputs/AggregateBook";
import { AggregateBookArgs } from "./args/AggregateBookArgs";
import { CreateBookArgs } from "./args/CreateBookArgs";
import { CreateManyBookArgs } from "./args/CreateManyBookArgs";
import { DeleteBookArgs } from "./args/DeleteBookArgs";
import { DeleteManyBookArgs } from "./args/DeleteManyBookArgs";
import { FindFirstBookArgs } from "./args/FindFirstBookArgs";
import { FindManyBookArgs } from "./args/FindManyBookArgs";
import { FindUniqueBookArgs } from "./args/FindUniqueBookArgs";
import { UpdateBookArgs } from "./args/UpdateBookArgs";
import { UpdateManyBookArgs } from "./args/UpdateManyBookArgs";
import { UpsertBookArgs } from "./args/UpsertBookArgs";

@TypeGraphQL.Resolver((_of) => Book)
export class BookCrudResolver {
  @TypeGraphQL.Query((_returns) => Book, { nullable: true })
  async book(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookArgs
  ): Promise<Book | null> {
    return getPrismaFromContext(ctx).book.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Book, { nullable: true })
  async findFirstBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookArgs
  ): Promise<Book | null> {
    return getPrismaFromContext(ctx).book.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Book], { nullable: false })
  async books(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookArgs
  ): Promise<Book[]> {
    return getPrismaFromContext(ctx).book.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: false })
  async createBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookArgs
  ): Promise<Book> {
    return getPrismaFromContext(ctx).book.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).book.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: true })
  async deleteBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookArgs
  ): Promise<Book | null> {
    return getPrismaFromContext(ctx).book.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: true })
  async updateBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookArgs
  ): Promise<Book | null> {
    return getPrismaFromContext(ctx).book.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).book.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).book.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: false })
  async upsertBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookArgs
  ): Promise<Book> {
    return getPrismaFromContext(ctx).book.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateBook, { nullable: false })
  async aggregateBook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookArgs
  ): Promise<AggregateBook> {
    return getPrismaFromContext(ctx).book.aggregate({
      ...args,
    });
  }
}
