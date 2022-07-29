import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { FindUniqueDashboardArgs } from "./args/FindUniqueDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class FindUniqueDashboardResolver {
  @TypeGraphQL.Query((_returns) => Dashboard, { nullable: true })
  async dashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueDashboardArgs
  ): Promise<Dashboard | null> {
    return DashboardCrudResolver.prototype.dashboard(ctx, info, args);
  }
}
