import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Value } from "../../../models/Value";
import { FindManyValueArgs } from "./args/FindManyValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class FindManyValueResolver {
  @TypeGraphQL.Query((_returns) => [Value], { nullable: false })
  async values(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyValueArgs
  ): Promise<Value[]> {
    return ValueCrudResolver.prototype.values(ctx, info, args);
  }
}
