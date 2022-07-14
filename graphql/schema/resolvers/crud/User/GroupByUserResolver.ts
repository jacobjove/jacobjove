import { ApolloContext } from "@/graphql/context";
import { UserCrudResolver } from "@/graphql/schema/resolvers/crud/User/UserCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { User } from "../../../models/User";
import { UserGroupBy } from "../../outputs/UserGroupBy";
import { GroupByUserArgs } from "./args/GroupByUserArgs";

@TypeGraphQL.Resolver((_of) => User)
export class GroupByUserResolver {
  @TypeGraphQL.Query((_returns) => [UserGroupBy], {
    nullable: false,
  })
  async groupByUser(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUserArgs
  ): Promise<UserGroupBy[]> {
    return UserCrudResolver.prototype.groupByUser(ctx, info, args);
  }
}
