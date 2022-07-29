import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Value } from "../../../models/Value";
import { UpdateValueArgs } from "./args/UpdateValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class UpdateValueResolver {
  @TypeGraphQL.Mutation((_returns) => Value, { nullable: true })
  async updateValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateValueArgs
  ): Promise<Value | null> {
    return ValueCrudResolver.prototype.updateValue(ctx, info, args);
  }
}
