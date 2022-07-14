import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class FindFirstAccountResolver {
  @TypeGraphQL.Query((_returns) => Account, {
    nullable: true,
  })
  async findFirstAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAccountArgs
  ): Promise<Account | null> {
    return AccountCrudResolver.prototype.findFirstAccount(ctx, info, args);
  }
}
