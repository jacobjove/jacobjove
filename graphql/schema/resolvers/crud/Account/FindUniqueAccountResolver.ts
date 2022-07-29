import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Account } from "../../../models/Account";
import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class FindUniqueAccountResolver {
  @TypeGraphQL.Query((_returns) => Account, { nullable: true })
  async account(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAccountArgs
  ): Promise<Account | null> {
    return AccountCrudResolver.prototype.account(ctx, info, args);
  }
}
