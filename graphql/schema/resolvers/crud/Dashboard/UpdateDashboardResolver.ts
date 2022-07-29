import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { UpdateDashboardArgs } from "./args/UpdateDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class UpdateDashboardResolver {
  @TypeGraphQL.Mutation((_returns) => Dashboard, { nullable: true })
  async updateDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateDashboardArgs
  ): Promise<Dashboard | null> {
    return DashboardCrudResolver.prototype.updateDashboard(ctx, info, args);
  }
}
