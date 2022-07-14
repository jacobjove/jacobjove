import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Dashboard } from "../../../models/Dashboard";
import { DashboardGroupBy } from "../../outputs/DashboardGroupBy";
import { GroupByDashboardArgs } from "./args/GroupByDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class GroupByDashboardResolver {
  @TypeGraphQL.Query((_returns) => [DashboardGroupBy], {
    nullable: false,
  })
  async groupByDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByDashboardArgs
  ): Promise<DashboardGroupBy[]> {
    return DashboardCrudResolver.prototype.groupByDashboard(ctx, info, args);
  }
}
