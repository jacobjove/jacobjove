import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { CategoryGroupBy } from "../../outputs/CategoryGroupBy";
import { GroupByCategoryArgs } from "./args/GroupByCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class GroupByCategoryResolver {
  @TypeGraphQL.Query((_returns) => [CategoryGroupBy], {
    nullable: false,
  })
  async groupByCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCategoryArgs
  ): Promise<CategoryGroupBy[]> {
    return CategoryCrudResolver.prototype.groupByCategory(ctx, info, args);
  }
}
