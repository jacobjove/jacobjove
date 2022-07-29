import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNotebookUserPermission } from "../../outputs/AggregateNotebookUserPermission";
import { AggregateNotebookUserPermissionArgs } from "./args/AggregateNotebookUserPermissionArgs";
import { CreateManyNotebookUserPermissionArgs } from "./args/CreateManyNotebookUserPermissionArgs";
import { CreateNotebookUserPermissionArgs } from "./args/CreateNotebookUserPermissionArgs";
import { DeleteManyNotebookUserPermissionArgs } from "./args/DeleteManyNotebookUserPermissionArgs";
import { DeleteNotebookUserPermissionArgs } from "./args/DeleteNotebookUserPermissionArgs";
import { FindFirstNotebookUserPermissionArgs } from "./args/FindFirstNotebookUserPermissionArgs";
import { FindManyNotebookUserPermissionArgs } from "./args/FindManyNotebookUserPermissionArgs";
import { FindUniqueNotebookUserPermissionArgs } from "./args/FindUniqueNotebookUserPermissionArgs";
import { UpdateManyNotebookUserPermissionArgs } from "./args/UpdateManyNotebookUserPermissionArgs";
import { UpdateNotebookUserPermissionArgs } from "./args/UpdateNotebookUserPermissionArgs";
import { UpsertNotebookUserPermissionArgs } from "./args/UpsertNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class NotebookUserPermissionCrudResolver {
  @TypeGraphQL.Query((_returns) => NotebookUserPermission, { nullable: true })
  async notebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return getPrismaFromContext(ctx).notebookUserPermission.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => NotebookUserPermission, { nullable: true })
  async findFirstNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return getPrismaFromContext(ctx).notebookUserPermission.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [NotebookUserPermission], { nullable: false })
  async notebookUserPermissions(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission[]> {
    return getPrismaFromContext(ctx).notebookUserPermission.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: false })
  async createNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    return getPrismaFromContext(ctx).notebookUserPermission.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).notebookUserPermission.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: true })
  async deleteNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return getPrismaFromContext(ctx).notebookUserPermission.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: true })
  async updateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    return getPrismaFromContext(ctx).notebookUserPermission.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).notebookUserPermission.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).notebookUserPermission.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: false })
  async upsertNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    return getPrismaFromContext(ctx).notebookUserPermission.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateNotebookUserPermission, { nullable: false })
  async aggregateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNotebookUserPermissionArgs
  ): Promise<AggregateNotebookUserPermission> {
    return getPrismaFromContext(ctx).notebookUserPermission.aggregate({
      ...args,
    });
  }
}
