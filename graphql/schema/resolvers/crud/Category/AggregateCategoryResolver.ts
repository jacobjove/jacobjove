import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Category } from "../../../models/Category";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class AggregateCategoryResolver {
  @TypeGraphQL.Query((_returns) => AggregateCategory, { nullable: false })
  async aggregateCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategoryArgs
  ): Promise<AggregateCategory> {
    return CategoryCrudResolver.prototype.aggregateCategory(ctx, info, args);
  }
}
