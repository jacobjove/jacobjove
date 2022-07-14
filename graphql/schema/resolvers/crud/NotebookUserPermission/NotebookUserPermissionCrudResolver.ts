import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { NotebookUserPermission } from "../../../models/NotebookUserPermission";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateNotebookUserPermission } from "../../outputs/AggregateNotebookUserPermission";
import { NotebookUserPermissionGroupBy } from "../../outputs/NotebookUserPermissionGroupBy";
import { AggregateNotebookUserPermissionArgs } from "./args/AggregateNotebookUserPermissionArgs";
import { CreateManyNotebookUserPermissionArgs } from "./args/CreateManyNotebookUserPermissionArgs";
import { CreateNotebookUserPermissionArgs } from "./args/CreateNotebookUserPermissionArgs";
import { DeleteManyNotebookUserPermissionArgs } from "./args/DeleteManyNotebookUserPermissionArgs";
import { DeleteNotebookUserPermissionArgs } from "./args/DeleteNotebookUserPermissionArgs";
import { FindFirstNotebookUserPermissionArgs } from "./args/FindFirstNotebookUserPermissionArgs";
import { FindManyNotebookUserPermissionArgs } from "./args/FindManyNotebookUserPermissionArgs";
import { FindUniqueNotebookUserPermissionArgs } from "./args/FindUniqueNotebookUserPermissionArgs";
import { GroupByNotebookUserPermissionArgs } from "./args/GroupByNotebookUserPermissionArgs";
import { UpdateManyNotebookUserPermissionArgs } from "./args/UpdateManyNotebookUserPermissionArgs";
import { UpdateNotebookUserPermissionArgs } from "./args/UpdateNotebookUserPermissionArgs";
import { UpsertNotebookUserPermissionArgs } from "./args/UpsertNotebookUserPermissionArgs";

@TypeGraphQL.Resolver((_of) => NotebookUserPermission)
export class NotebookUserPermissionCrudResolver {
  @TypeGraphQL.Query((_returns) => NotebookUserPermission, {
    nullable: true,
  })
  async notebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => NotebookUserPermission, {
    nullable: true,
  })
  async findFirstNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [NotebookUserPermission], {
    nullable: false,
  })
  async notebookUserPermissions(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, {
    nullable: false,
  })
  async createNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, {
    nullable: true,
  })
  async deleteNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, {
    nullable: true,
  })
  async updateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyNotebookUserPermissionArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => NotebookUserPermission, {
    nullable: false,
  })
  async upsertNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertNotebookUserPermissionArgs
  ): Promise<NotebookUserPermission> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateNotebookUserPermission, {
    nullable: false,
  })
  async aggregateNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateNotebookUserPermissionArgs
  ): Promise<AggregateNotebookUserPermission> {
    return getPrismaFromContext(ctx).notebookUserPermission.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [NotebookUserPermissionGroupBy], {
    nullable: false,
  })
  async groupByNotebookUserPermission(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByNotebookUserPermissionArgs
  ): Promise<NotebookUserPermissionGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).notebookUserPermission.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
