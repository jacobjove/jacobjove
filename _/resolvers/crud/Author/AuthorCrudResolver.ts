import { GqlContext } from "@/graphql/context";
import { Author } from "@/graphql/schema/generated/models/author.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAuthorArgs
  ): Promise<Author | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Author, { nullable: true })
  async findFirstAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAuthorArgs
  ): Promise<Author | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Author], { nullable: false })
  async authors(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAuthorArgs
  ): Promise<Author[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: false })
  async createAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAuthorArgs
  ): Promise<Author> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: true })
  async deleteAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAuthorArgs
  ): Promise<Author | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: true })
  async updateAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAuthorArgs
  ): Promise<Author | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAuthorArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Author, { nullable: false })
  async upsertAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAuthorArgs
  ): Promise<Author> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateAuthor, { nullable: false })
  async aggregateAuthor(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAuthorArgs
  ): Promise<AggregateAuthor> {
    throw new Error("Not implemented");
  }
}
