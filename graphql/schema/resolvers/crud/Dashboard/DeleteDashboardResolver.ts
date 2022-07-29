import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { DeleteDashboardArgs } from "./args/DeleteDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class DeleteDashboardResolver {
  @TypeGraphQL.Mutation((_returns) => Dashboard, { nullable: true })
  async deleteDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteDashboardArgs
  ): Promise<Dashboard | null> {
    return DashboardCrudResolver.prototype.deleteDashboard(ctx, info, args);
  }
}
