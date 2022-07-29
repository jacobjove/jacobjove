import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Account } from "../../../models/Account";
import { UpsertAccountArgs } from "./args/UpsertAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class UpsertAccountResolver {
  @TypeGraphQL.Mutation((_returns) => Account, { nullable: false })
  async upsertAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAccountArgs
  ): Promise<Account> {
    return AccountCrudResolver.prototype.upsertAccount(ctx, info, args);
  }
}
