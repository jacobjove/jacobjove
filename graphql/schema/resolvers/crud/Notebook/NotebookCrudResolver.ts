import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import {
  createItem,
  getItem,
  getPrismaFromContext,
  getUserSubcollectionData,
  updateItem,
} from "../../../helpers";
import { Notebook } from "../../../models/Notebook";
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
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookArgs
  ): Promise<Notebook | null> {
    return getItem("notebooks", ctx, info, args) as Promise<Notebook | null>;
  }

  @TypeGraphQL.Query((_returns) => Notebook, { nullable: true })
  async findFirstNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNotebookArgs
  ): Promise<Notebook | null> {
    return getPrismaFromContext(ctx).notebook.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Notebook], { nullable: false })
  async notebooks(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookArgs
  ): Promise<Notebook[]> {
    return getUserSubcollectionData("notebooks", ctx, info, args, true) as Promise<Notebook[]>;
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: false })
  async createNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNotebookArgs
  ): Promise<Notebook> {
    return createItem({
      collectionName: "notebooks",
      ctx,
      info,
      args,
      inlineWithUser: true,
    }) as Promise<Notebook>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).notebook.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: true })
  async deleteNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookArgs
  ): Promise<Notebook | null> {
    return getPrismaFromContext(ctx).notebook.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: true })
  async updateNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNotebookArgs
  ): Promise<Notebook | null> {
    return updateItem("notebooks", ctx, info, args, true) as Promise<Notebook | null>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).notebook.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNotebookArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).notebook.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Notebook, { nullable: false })
  async upsertNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNotebookArgs
  ): Promise<Notebook> {
    return getPrismaFromContext(ctx).notebook.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateNotebook, { nullable: false })
  async aggregateNotebook(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNotebookArgs
  ): Promise<AggregateNotebook> {
    return getPrismaFromContext(ctx).notebook.aggregate({
      ...args,
    });
  }
}
