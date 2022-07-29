import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Author } from "../../../models/Author";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAuthor } from "../../outputs/AggregateAuthor";
import { AggregateAuthorArgs } from "./args/AggregateAuthorArgs";
import { CreateAuthorArgs } from "./args/CreateAuthorArgs";
import { CreateManyAuthorArgs } from "./args/CreateManyAuthorArgs";
import { DeleteAuthorArgs } from "./args/DeleteAuthorArgs";
import { DeleteManyAuthorArgs } from "./args/DeleteManyAuthorArgs";
import { FindFirstAuthorArgs } from "./args/FindFirstAuthorArgs";
import { FindManyAuthorArgs } from "./args/FindManyAuthorArgs";
import { FindUniqueAuthorArgs } from "./args/FindUniqueAuthorArgs";
import { UpdateAuthorArgs } from "./args/UpdateAuthorArgs";
import { UpdateManyAuthorArgs } from "./args/UpdateManyAuthorArgs";
import { UpsertAuthorArgs } from "./args/UpsertAuthorArgs";

@TypeGraphQL.Resolver((_of) => Author)
export class AuthorCrudResolver {
  @TypeGraphQL.Query((_returns) => Author, { nullable: true })
  async author(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAuthorArgs
  ): Promise<Author | null> {
    return getPrismaFromContext(ctx).author.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Author, { nullable: true })
  async findFirstAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAuthorArgs
  ): Promise<Author | null> {
    return getPrismaFromContext(ctx).author.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Author], { nullable: false })
  async authors(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAuthorArgs
  ): Promise<Author[]> {
    return getPrismaFromContext(ctx).author.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: false })
  async createAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAuthorArgs
  ): Promise<Author> {
    return getPrismaFromContext(ctx).author.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).author.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: true })
  async deleteAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAuthorArgs
  ): Promise<Author | null> {
    return getPrismaFromContext(ctx).author.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: true })
  async updateAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAuthorArgs
  ): Promise<Author | null> {
    return getPrismaFromContext(ctx).author.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).author.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).author.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: false })
  async upsertAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAuthorArgs
  ): Promise<Author> {
    return getPrismaFromContext(ctx).author.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateAuthor, { nullable: false })
  async aggregateAuthor(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAuthorArgs
  ): Promise<AggregateAuthor> {
    return getPrismaFromContext(ctx).author.aggregate({
      ...args,
    });
  }
}
