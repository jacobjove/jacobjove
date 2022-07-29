import { ApolloContext } from "@/graphql/context";
import { ActionCrudResolver } from "@/graphql/schema/resolvers/crud/Action/ActionCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Action } from "../../../models/Action";
import { UpsertActionArgs } from "./args/UpsertActionArgs";

@TypeGraphQL.Resolver((_of) => Action)
export class UpsertActionResolver {
  @TypeGraphQL.Mutation((_returns) => Action, { nullable: false })
  async upsertAction(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertActionArgs
  ): Promise<Action> {
    return ActionCrudResolver.prototype.upsertAction(ctx, info, args);
  }
}
