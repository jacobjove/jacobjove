import { ApolloContext } from "@/graphql/context";
import { DashboardCrudResolver } from "@/graphql/schema/resolvers/crud/Dashboard/DashboardCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { DeleteManyDashboardArgs } from "./args/DeleteManyDashboardArgs";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class DeleteManyDashboardResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyDashboard(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyDashboardArgs
  ): Promise<AffectedRowsOutput> {
    return DashboardCrudResolver.prototype.deleteManyDashboard(ctx, info, args);
  }
}
