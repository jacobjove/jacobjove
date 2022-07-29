import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Account } from "../../../models/Account";
import { AggregateAccount } from "../../outputs/AggregateAccount";
import { AggregateAccountArgs } from "./args/AggregateAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class AggregateAccountResolver {
  @TypeGraphQL.Query((_returns) => AggregateAccount, { nullable: false })
  async aggregateAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAccountArgs
  ): Promise<AggregateAccount> {
    return AccountCrudResolver.prototype.aggregateAccount(ctx, info, args);
  }
}
