import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class FindManyAccountResolver {
  @TypeGraphQL.Query((_returns) => [Account], {
    nullable: false,
  })
  async accounts(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAccountArgs
  ): Promise<Account[]> {
    return AccountCrudResolver.prototype.accounts(ctx, info, args);
  }
}
