import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Value } from "../../../models/Value";
import { CreateValueArgs } from "./args/CreateValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class CreateValueResolver {
  @TypeGraphQL.Mutation((_returns) => Value, {
    nullable: false,
  })
  async createValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateValueArgs
  ): Promise<Value> {
    return ValueCrudResolver.prototype.createValue(ctx, info, args);
  }
}
