/* Do not edit this file. It was generated programmatically. */

import type { GqlContext } from "@web/graphql/context";
import {
  AccountCreationArgs,
  AccountsCreationArgs,
  AccountUpdateArgs,
  AccountUpsertionArgs,
  ArgsForUpdatingManyAccounts,
  DeleteAccountArgs,
  DeleteManyAccountArgs,
  FindManyAccountArgs,
  FindUniqueAccountArgs,
} from "@web/graphql/generated/args/account.args";
import AccountModel from "@web/graphql/generated/models/AccountModel";
import UserModel from "@web/graphql/generated/models/UserModel";
import Account from "@web/graphql/generated/types/Account";
import { convertFilterForMongo } from "@web/graphql/schema/helpers";
import { ObjectIdScalar } from "@web/graphql/schema/scalars";
import type { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver(() => Account)
export class AccountResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() account: Account) {
    return account._id;
  }

  @TypeGraphQL.Query(() => Account, { nullable: true })
  async account(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAccountArgs
  ): Promise<Account | null> {
    const filter = convertFilterForMongo(args.where);
    return AccountModel.findOne(filter);
  }

  @TypeGraphQL.Query(() => [Account], { nullable: false })
  async accounts(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAccountArgs
  ): Promise<Account[]> {
    const filter = convertFilterForMongo(args.where);
    return AccountModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Account)
  async createAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AccountCreationArgs
  ) {
    const account = await AccountModel.create(args.data);
    if (account) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate(
        { _id: account.userId },
        { $push: { accounts: { ...account } } }
      );
    }
    return account;
  }

  @TypeGraphQL.Mutation(() => [Account], { nullable: false })
  async createManyAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AccountsCreationArgs
  ): Promise<Account[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Account)
  async updateAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AccountUpdateArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const account = await AccountModel.findOneAndUpdate(filter, args.data, {
      returnDocument: "after",
    });
    // NOTE: This update fails if it's not awaited.
    account &&
      (await UserModel.findOneAndUpdate(
        { _id: account.userId, "accounts._id": account._id },
        {
          $set: { "accounts.$": { ...account } },
        }
      ));
    return account;
  }

  @TypeGraphQL.Mutation(() => Account)
  async upsertAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AccountUpsertionArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const account = await AccountModel.findOneAndUpdate(filter, args.data, {
      upsert: true,
      new: true,
      returnDocument: "after",
    });
    return account;
  }

  @TypeGraphQL.Mutation(() => [Account], { nullable: false })
  async updateAccounts(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyAccounts
  ): Promise<Account[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Account], { nullable: false })
  async updateAccountsDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyAccounts
  ): Promise<Account[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Account, { nullable: true })
  async deleteAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Account], { nullable: false })
  async deleteManyAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAccountArgs
  ): Promise<Account[]> {
    throw new Error("Not implemented");
  }
}
