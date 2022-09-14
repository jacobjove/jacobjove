/* Do not edit this file. It was generated programmatically. */

import * as TypeGraphQL from "type-graphql-v2-fork";
import Dashboard from "@web/generated/types/Dashboard";
import DashboardModel from "@web/generated/models/DashboardModel";
import {
  DashboardCreationArgs,
  DashboardsCreationArgs,
  DeleteDashboardArgs,
  DeleteManyDashboardArgs,
  FindManyDashboardArgs,
  FindUniqueDashboardArgs,
  DashboardUpdateArgs,
  ArgsForUpdatingManyDashboards,
  DashboardUpsertionArgs,
} from "@web/graphql/generated/args/dashboard.args";
import type { GqlContext } from "@web/graphql/context";
import type { GraphQLResolveInfo } from "graphql";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import {
  createDashboard as _createDashboard,
  updateDashboard as _updateDashboard,
  upsertDashboard as _upsertDashboard,
  findDashboard as _findDashboard,
} from "@web/generated/shortcuts/dashboard.shortcuts";
import UserModel from "@web/generated/models/UserModel";

@TypeGraphQL.Resolver(() => Dashboard)
export class DashboardResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() dashboard: Dashboard) {
    return dashboard._id;
  }

  @TypeGraphQL.Query(() => Dashboard, { nullable: true })
  async dashboard(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueDashboardArgs
  ): Promise<Dashboard | null> {
    return _findDashboard(args);
  }

  @TypeGraphQL.Query(() => [Dashboard], { nullable: false })
  async dashboards(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyDashboardArgs
  ): Promise<Dashboard[]> {
    const filter = convertFilterForMongo(args.where);
    return DashboardModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Dashboard)
  async createDashboard(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DashboardCreationArgs
  ) {
    const dashboard = await _createDashboard(args);
    if (dashboard) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate(
        { _id: dashboard.userId },
        { $push: { dashboards: { ...dashboard } } }
      );
    }
    return dashboard;
  }

  @TypeGraphQL.Mutation(() => [Dashboard], { nullable: false })
  async createManyDashboard(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DashboardsCreationArgs
  ): Promise<Dashboard[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Dashboard)
  async updateDashboard(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DashboardUpdateArgs
  ) {
    return _updateDashboard(args);
  }

  @TypeGraphQL.Mutation(() => Dashboard)
  async upsertDashboard(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DashboardUpsertionArgs
  ) {
    return _upsertDashboard(args);
  }

  @TypeGraphQL.Mutation(() => [Dashboard], { nullable: false })
  async updateDashboards(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyDashboards
  ): Promise<Dashboard[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Dashboard], { nullable: false })
  async updateDashboardsDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyDashboards
  ): Promise<Dashboard[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Dashboard, { nullable: true })
  async deleteDashboard(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteDashboardArgs
  ): Promise<Dashboard | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Dashboard], { nullable: false })
  async deleteManyDashboard(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyDashboardArgs
  ): Promise<Dashboard[]> {
    throw new Error("Not implemented");
  }
}
