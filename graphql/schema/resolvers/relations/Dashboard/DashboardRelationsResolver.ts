import { ApolloContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "../../../models/Dashboard";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class DashboardRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() dashboard: Dashboard,
    @TypeGraphQL.Ctx() ctx: ApolloContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }
}
