import { GqlContext } from "@/graphql/context";
import { Book } from "@/graphql/schema/generated/models/book.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookArgs
  ): Promise<Book | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Book, { nullable: true })
  async findFirstBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookArgs
  ): Promise<Book | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Book], { nullable: false })
  async books(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookArgs
  ): Promise<Book[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: false })
  async createBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookArgs
  ): Promise<Book> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: true })
  async deleteBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookArgs
  ): Promise<Book | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: true })
  async updateBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookArgs
  ): Promise<Book | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Book, { nullable: false })
  async upsertBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookArgs
  ): Promise<Book> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateBook, { nullable: false })
  async aggregateBook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookArgs
  ): Promise<AggregateBook> {
    throw new Error("Not implemented");
  }
}
