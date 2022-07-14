import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Dashboard } from "../../../models/Dashboard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateDashboard } from "../../outputs/AggregateDashboard";
import { DashboardGroupBy } from "../../outputs/DashboardGroupBy";
import { AggregateDashboardArgs } from "./args/AggregateDashboardArgs";
import { CreateDashboardArgs } from "./args/CreateDashboardArgs";
import { CreateManyDashboardArgs } from "./args/CreateManyDashboardArgs";
import { DeleteDashboardArgs } from "./args/DeleteDashboardArgs";
import { DeleteManyDashboardArgs } from "./args/DeleteManyDashboardArgs";
import { FindFirstDashboardArgs } from "./args/FindFirstDashboardArgs";
import { FindManyDashboardArgs } from "./args/FindManyDashboardArgs";
import { FindUniqueDashboardArgs } from "./args/FindUniqueDashboardArgs";
import { GroupByDashboardArgs } from "./args/GroupByDashboardArgs";
import { UpdateDashboardArgs } from "./args/UpdateDashboardArgs";
import { UpdateManyDashboardArgs } from "./args/UpdateManyDashboardArgs";
import { UpsertDashboardArgs } from "./args/UpsertDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class DashboardCrudResolver {
  @TypeGraphQL.Query((_returns) => Dashboard, {
    nullable: true,
  })
  async dashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueDashboardArgs
  ): Promise<Dashboard | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Dashboard, {
    nullable: true,
  })
  async findFirstDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstDashboardArgs
  ): Promise<Dashboard | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Dashboard], {
    nullable: false,
  })
  async dashboards(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyDashboardArgs
  ): Promise<Dashboard[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, {
    nullable: false,
  })
  async createDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateDashboardArgs
  ): Promise<Dashboard> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, {
    nullable: true,
  })
  async deleteDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteDashboardArgs
  ): Promise<Dashboard | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, {
    nullable: true,
  })
  async updateDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateDashboardArgs
  ): Promise<Dashboard | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Dashboard, {
    nullable: false,
  })
  async upsertDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertDashboardArgs
  ): Promise<Dashboard> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateDashboard, {
    nullable: false,
  })
  async aggregateDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateDashboardArgs
  ): Promise<AggregateDashboard> {
    return getPrismaFromContext(ctx).dashboard.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [DashboardGroupBy], {
    nullable: false,
  })
  async groupByDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByDashboardArgs
  ): Promise<DashboardGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).dashboard.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
