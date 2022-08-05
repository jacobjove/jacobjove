import { GqlContext } from "@/graphql/context";
import { Notebook } from "@/graphql/schema/generated/models/notebook.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNotebook } from "../../outputs/AggregateNotebook";
import { AggregateNotebookArgs } from "./args/AggregateNotebookArgs";
import { CreateManyNotebookArgs } from "./args/CreateManyNotebookArgs";
import { CreateNotebookArgs } from "./args/CreateNotebookArgs";
import { DeleteManyNotebookArgs } from "./args/DeleteManyNotebookArgs";
import { DeleteNotebookArgs } from "./args/DeleteNotebookArgs";
import { FindFirstNotebookArgs } from "./args/FindFirstNotebookArgs";
import { FindManyNotebookArgs } from "./args/FindManyNotebookArgs";
import { FindUniqueNotebookArgs } from "./args/FindUniqueNotebookArgs";
import { UpdateManyNotebookArgs } from "./args/UpdateManyNotebookArgs";
import { UpdateNotebookArgs } from "./args/UpdateNotebookArgs";
import { UpsertNotebookArgs } from "./args/UpsertNotebookArgs";

@TypeGraphQL.Resolver((_of) => Notebook)
export class NotebookCrudResolver {
  @TypeGraphQL.Query((_returns) => Notebook, { nullable: true })
  async notebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookArgs
  ): Promise<Notebook | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Notebook, { nullable: true })
  async findFirstNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNotebookArgs
  ): Promise<Notebook | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Notebook], { nullable: false })
  async notebooks(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookArgs
  ): Promise<Notebook[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: false })
  async createNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNotebookArgs
  ): Promise<Notebook> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: true })
  async deleteNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookArgs
  ): Promise<Notebook | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: true })
  async updateNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNotebookArgs
  ): Promise<Notebook | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: false })
  async upsertNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNotebookArgs
  ): Promise<Notebook> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateNotebook, { nullable: false })
  async aggregateNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNotebookArgs
  ): Promise<AggregateNotebook> {
    throw new Error("Not implemented");
  }
}
