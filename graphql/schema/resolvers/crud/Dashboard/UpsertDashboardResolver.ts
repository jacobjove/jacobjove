import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { UpsertDashboardArgs } from "./args/UpsertDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class UpsertDashboardResolver {
  @TypeGraphQL.Mutation((_returns) => Dashboard, { nullable: false })
  async upsertDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertDashboardArgs
  ): Promise<Dashboard> {
    return DashboardCrudResolver.prototype.upsertDashboard(ctx, info, args);
  }
}
