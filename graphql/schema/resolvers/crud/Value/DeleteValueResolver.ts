import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Value } from "../../../models/Value";
import { DeleteValueArgs } from "./args/DeleteValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class DeleteValueResolver {
  @TypeGraphQL.Mutation((_returns) => Value, {
    nullable: true,
  })
  async deleteValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteValueArgs
  ): Promise<Value | null> {
    return ValueCrudResolver.prototype.deleteValue(ctx, info, args);
  }
}
