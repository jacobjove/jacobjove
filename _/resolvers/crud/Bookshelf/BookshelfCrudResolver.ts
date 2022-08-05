import { GqlContext } from "@/graphql/context";
import { Bookshelf } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueBookshelfArgs
  ): Promise<Bookshelf | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Bookshelf, { nullable: true })
  async findFirstBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstBookshelfArgs
  ): Promise<Bookshelf | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Bookshelf], { nullable: false })
  async bookshelves(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyBookshelfArgs
  ): Promise<Bookshelf[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: false })
  async createBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateBookshelfArgs
  ): Promise<Bookshelf> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: true })
  async deleteBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteBookshelfArgs
  ): Promise<Bookshelf | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: true })
  async updateBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateBookshelfArgs
  ): Promise<Bookshelf | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyBookshelfArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Bookshelf, { nullable: false })
  async upsertBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertBookshelfArgs
  ): Promise<Bookshelf> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateBookshelf, { nullable: false })
  async aggregateBookshelf(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateBookshelfArgs
  ): Promise<AggregateBookshelf> {
    throw new Error("Not implemented");
  }
}
