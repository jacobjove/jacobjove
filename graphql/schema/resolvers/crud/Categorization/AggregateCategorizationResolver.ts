import { ApolloContext } from "@/graphql/context";
import { CategorizationCrudResolver } from "@/graphql/schema/resolvers/crud/Categorization/CategorizationCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Categorization } from "../../../models/Categorization";
import { AggregateCategorization } from "../../outputs/AggregateCategorization";
import { AggregateCategorizationArgs } from "./args/AggregateCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class AggregateCategorizationResolver {
  @TypeGraphQL.Query((_returns) => AggregateCategorization, { nullable: false })
  async aggregateCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategorizationArgs
  ): Promise<AggregateCategorization> {
    return CategorizationCrudResolver.prototype.aggregateCategorization(ctx, info, args);
  }
}
