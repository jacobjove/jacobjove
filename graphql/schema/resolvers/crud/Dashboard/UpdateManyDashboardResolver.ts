import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Dashboard } from "../../../models/Dashboard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyDashboardArgs } from "./args/UpdateManyDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class UpdateManyDashboardResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    return DashboardCrudResolver.prototype.updateManyDashboard(ctx, info, args);
  }
}
