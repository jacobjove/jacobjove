import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Dashboard } from "../../../models/Dashboard";
import { FindManyDashboardArgs } from "./args/FindManyDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class FindManyDashboardResolver {
  @TypeGraphQL.Query((_returns) => [Dashboard], {
    nullable: false,
  })
  async dashboards(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyDashboardArgs
  ): Promise<Dashboard[]> {
    return DashboardCrudResolver.prototype.dashboards(ctx, info, args);
  }
}
