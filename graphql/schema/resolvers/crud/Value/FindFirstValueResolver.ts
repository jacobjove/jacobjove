import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Value } from "../../../models/Value";
import { FindFirstValueArgs } from "./args/FindFirstValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class FindFirstValueResolver {
  @TypeGraphQL.Query((_returns) => Value, { nullable: true })
  async findFirstValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstValueArgs
  ): Promise<Value | null> {
    return ValueCrudResolver.prototype.findFirstValue(ctx, info, args);
  }
}
