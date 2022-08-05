import { GqlContext } from "@/graphql/context";
import { NotebookUserPermission } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => NotebookUserPermission, { nullable: true })
  async findFirstNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [NotebookUserPermission], { nullable: false })
  async notebookUserPermissions(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: false })
  async createNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: true })
  async deleteNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: true })
  async updateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, { nullable: false })
  async upsertNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateNotebookUserPermission, { nullable: false })
  async aggregateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNotebookUserPermissionArgs
  ): Promise<AggregateNotebookUserPermission> {
    throw new Error("Not implemented");
  }
}
