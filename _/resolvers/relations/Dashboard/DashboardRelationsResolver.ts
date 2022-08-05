import { GqlContext } from "@/graphql/context";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Dashboard } from "@/graphql/schema/generated/models/dashboard.model";
import { User } from "@/graphql/schema/generated/models/user.model";

@TypeGraphQL.Resolver((_of) => Dashboard)
export class DashboardRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() dashboard: Dashboard,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }
}
