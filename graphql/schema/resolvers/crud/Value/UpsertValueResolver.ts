import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Value } from "../../../models/Value";
import { UpsertValueArgs } from "./args/UpsertValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class UpsertValueResolver {
  @TypeGraphQL.Mutation((_returns) => Value, { nullable: false })
  async upsertValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertValueArgs
  ): Promise<Value> {
    return ValueCrudResolver.prototype.upsertValue(ctx, info, args);
  }
}
