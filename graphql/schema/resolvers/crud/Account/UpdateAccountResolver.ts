import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { UpdateAccountArgs } from "./args/UpdateAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class UpdateAccountResolver {
  @TypeGraphQL.Mutation((_returns) => Account, {
    nullable: true,
  })
  async updateAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    return AccountCrudResolver.prototype.updateAccount(ctx, info, args);
  }
}
