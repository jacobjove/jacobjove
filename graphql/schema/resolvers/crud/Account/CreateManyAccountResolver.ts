import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { CreateManyAccountArgs } from "./args/CreateManyAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class CreateManyAccountResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    return AccountCrudResolver.prototype.createManyAccount(ctx, info, args);
  }
}
