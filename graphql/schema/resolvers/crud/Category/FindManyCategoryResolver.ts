import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Category } from "../../../models/Category";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class FindManyCategoryResolver {
  @TypeGraphQL.Query((_returns) => [Category], { nullable: false })
  async categories(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategoryArgs
  ): Promise<Category[]> {
    return CategoryCrudResolver.prototype.categories(ctx, info, args);
  }
}
