import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class FindFirstCategoryResolver {
  @TypeGraphQL.Query((_returns) => Category, {
    nullable: true,
  })
  async findFirstCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoryArgs
  ): Promise<Category | null> {
    return CategoryCrudResolver.prototype.findFirstCategory(ctx, info, args);
  }
}
