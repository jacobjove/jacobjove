import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { AccountGroupBy } from "../../outputs/AccountGroupBy";
import { GroupByAccountArgs } from "./args/GroupByAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class GroupByAccountResolver {
  @TypeGraphQL.Query((_returns) => [AccountGroupBy], {
    nullable: false,
  })
  async groupByAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByAccountArgs
  ): Promise<AccountGroupBy[]> {
    return AccountCrudResolver.prototype.groupByAccount(ctx, info, args);
  }
}
