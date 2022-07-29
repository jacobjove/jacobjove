import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { AggregateDashboard } from "../../outputs/AggregateDashboard";
import { AggregateDashboardArgs } from "./args/AggregateDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class AggregateDashboardResolver {
  @TypeGraphQL.Query((_returns) => AggregateDashboard, { nullable: false })
  async aggregateDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateDashboardArgs
  ): Promise<AggregateDashboard> {
    return DashboardCrudResolver.prototype.aggregateDashboard(ctx, info, args);
  }
}
