import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Value } from "../../../models/Value";
import { ValueGroupBy } from "../../outputs/ValueGroupBy";
import { GroupByValueArgs } from "./args/GroupByValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class GroupByValueResolver {
  @TypeGraphQL.Query((_returns) => [ValueGroupBy], {
    nullable: false,
  })
  async groupByValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByValueArgs
  ): Promise<ValueGroupBy[]> {
    return ValueCrudResolver.prototype.groupByValue(ctx, info, args);
  }
}
