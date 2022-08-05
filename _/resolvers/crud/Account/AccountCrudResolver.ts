import { GqlContext } from "@/graphql/context";
import { Account } from "@/graphql/schema/generated/models/account.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateAccount } from "../../outputs/AggregateAccount";
import { AggregateAccountArgs } from "./args/AggregateAccountArgs";
import { CreateAccountArgs } from "./args/CreateAccountArgs";
import { CreateManyAccountArgs } from "./args/CreateManyAccountArgs";
import { DeleteAccountArgs } from "./args/DeleteAccountArgs";
import { DeleteManyAccountArgs } from "./args/DeleteManyAccountArgs";
import { FindFirstAccountArgs } from "./args/FindFirstAccountArgs";
import { FindManyAccountArgs } from "./args/FindManyAccountArgs";
import { FindUniqueAccountArgs } from "./args/FindUniqueAccountArgs";
import { UpdateAccountArgs } from "./args/UpdateAccountArgs";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";
import { UpsertAccountArgs } from "./args/UpsertAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class AccountCrudResolver {
  @TypeGraphQL.Query((_returns) => Account, { nullable: true })
  async account(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueAccountArgs
  ): Promise<Account | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Account, { nullable: true })
  async findFirstAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstAccountArgs
  ): Promise<Account | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Account], { nullable: false })
  async accounts(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyAccountArgs
  ): Promise<Account[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: false })
  async createAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateAccountArgs
  ): Promise<Account> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: true })
  async deleteAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteAccountArgs
  ): Promise<Account | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: true })
  async updateAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateAccountArgs
  ): Promise<Account | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Account, { nullable: false })
  async upsertAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertAccountArgs
  ): Promise<Account> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateAccount, { nullable: false })
  async aggregateAccount(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAccountArgs
  ): Promise<AggregateAccount> {
    throw new Error("Not implemented");
  }
}
