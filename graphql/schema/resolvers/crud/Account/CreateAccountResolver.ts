import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Account } from "../../../models/Account";
import { CreateAccountArgs } from "./args/CreateAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class CreateAccountResolver {
  @TypeGraphQL.Mutation((_returns) => Account, { nullable: false })
  async createAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAccountArgs
  ): Promise<Account> {
    return AccountCrudResolver.prototype.createAccount(ctx, info, args);
  }
}
