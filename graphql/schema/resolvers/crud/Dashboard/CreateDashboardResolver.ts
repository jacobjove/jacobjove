import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Dashboard } from "../../../models/Dashboard";
import { CreateDashboardArgs } from "./args/CreateDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class CreateDashboardResolver {
  @TypeGraphQL.Mutation((_returns) => Dashboard, {
    nullable: false,
  })
  async createDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateDashboardArgs
  ): Promise<Dashboard> {
    return DashboardCrudResolver.prototype.createDashboard(ctx, info, args);
  }
}
