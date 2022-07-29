import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { FindFirstDashboardArgs } from "./args/FindFirstDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class FindFirstDashboardResolver {
  @TypeGraphQL.Query((_returns) => Dashboard, { nullable: true })
  async findFirstDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstDashboardArgs
  ): Promise<Dashboard | null> {
    return DashboardCrudResolver.prototype.findFirstDashboard(ctx, info, args);
  }
}
