import { ApolloContext } from "@/graphql/context";
import { AccountCrudResolver } from "@/graphql/schema/resolvers/crud/Account/AccountCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Account } from "../../../models/Account";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { UpdateManyAccountArgs } from "./args/UpdateManyAccountArgs";

@TypeGraphQL.Resolver((_of) => Account)
export class UpdateManyAccountResolver {
  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyAccount(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyAccountArgs
  ): Promise<AffectedRowsOutput> {
    return AccountCrudResolver.prototype.updateManyAccount(ctx, info, args);
  }
}
