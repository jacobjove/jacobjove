import { ApolloContext } from "@/graphql/context";
import { ValueCrudResolver } from "@/graphql/schema/resolvers/crud/Value/ValueCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Value } from "../../../models/Value";
import { AggregateValue } from "../../outputs/AggregateValue";
import { AggregateValueArgs } from "./args/AggregateValueArgs";

@TypeGraphQL.Resolver((_of) => Value)
export class AggregateValueResolver {
  @TypeGraphQL.Query((_returns) => AggregateValue, { nullable: false })
  async aggregateValue(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateValueArgs
  ): Promise<AggregateValue> {
    return ValueCrudResolver.prototype.aggregateValue(ctx, info, args);
  }
}
