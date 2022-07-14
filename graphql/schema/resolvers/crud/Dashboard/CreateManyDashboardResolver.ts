import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Dashboard } from "../../../models/Dashboard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyDashboardArgs } from "./args/CreateManyDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class CreateManyDashboardResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    return DashboardCrudResolver.prototype.createManyDashboard(ctx, info, args);
  }
}
