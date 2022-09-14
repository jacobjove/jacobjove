/* Do not edit this file. It was generated programmatically. */

import * as TypeGraphQL from "type-graphql-v2-fork";
import Notebook from "@web/generated/types/Notebook";
import NotebookModel from "@web/generated/models/NotebookModel";
import {
  NotebookCreationArgs,
  NotebooksCreationArgs,
  DeleteNotebookArgs,
  DeleteManyNotebookArgs,
  FindManyNotebookArgs,
  FindUniqueNotebookArgs,
  NotebookUpdateArgs,
  ArgsForUpdatingManyNotebooks,
  NotebookUpsertionArgs,
} from "@web/graphql/generated/args/notebook.args";
import type { GqlContext } from "@web/graphql/context";
import type { GraphQLResolveInfo } from "graphql";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import {
  createNotebook as _createNotebook,
  updateNotebook as _updateNotebook,
  upsertNotebook as _upsertNotebook,
  findNotebook as _findNotebook,
} from "@web/generated/shortcuts/notebook.shortcuts";
import UserModel from "@web/generated/models/UserModel";

@TypeGraphQL.Resolver(() => Notebook)
export class NotebookResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() notebook: Notebook) {
    return notebook._id;
  }

  @TypeGraphQL.Query(() => Notebook, { nullable: true })
  async notebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookArgs
  ): Promise<Notebook | null> {
    return _findNotebook(args);
  }

  @TypeGraphQL.Query(() => [Notebook], { nullable: false })
  async notebooks(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookArgs
  ): Promise<Notebook[]> {
    const filter = convertFilterForMongo(args.where);
    return NotebookModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Notebook)
  async createNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: NotebookCreationArgs
  ) {
    const notebook = await _createNotebook(args);
    if (notebook) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate(
        { _id: notebook.userId },
        { $push: { notebooks: { ...notebook } } }
      );
    }
    return notebook;
  }

  @TypeGraphQL.Mutation(() => [Notebook], { nullable: false })
  async createManyNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: NotebooksCreationArgs
  ): Promise<Notebook[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Notebook)
  async updateNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: NotebookUpdateArgs
  ) {
    return _updateNotebook(args);
  }

  @TypeGraphQL.Mutation(() => Notebook)
  async upsertNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: NotebookUpsertionArgs
  ) {
    return _upsertNotebook(args);
  }

  @TypeGraphQL.Mutation(() => [Notebook], { nullable: false })
  async updateNotebooks(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyNotebooks
  ): Promise<Notebook[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Notebook], { nullable: false })
  async updateNotebooksDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyNotebooks
  ): Promise<Notebook[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Notebook, { nullable: true })
  async deleteNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookArgs
  ): Promise<Notebook | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Notebook], { nullable: false })
  async deleteManyNotebook(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookArgs
  ): Promise<Notebook[]> {
    throw new Error("Not implemented");
  }
}
