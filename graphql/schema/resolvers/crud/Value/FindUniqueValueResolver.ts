import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Value } from "../../../models/Value";
import { FindUniqueValueArgs } from "./args/FindUniqueValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class FindUniqueValueResolver {
  @TypeGraphQL.Query((_returns) => Value, {
    nullable: true,
  })
  async value(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueValueArgs
  ): Promise<Value | null> {
    return ValueCrudResolver.prototype.value(ctx, info, args);
  }
}
