import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Account } from "../../../models/Account";
import { DeleteAccountArgs } from "./args/DeleteAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class DeleteAccountResolver {
  @TypeGraphQL.Mutation((_returns) => Account, { nullable: true })
  async deleteAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    return AccountCrudResolver.prototype.deleteAccount(ctx, info, args);
  }
}
