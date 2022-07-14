import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class DeleteCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => Category, {
    nullable: true,
  })
  async deleteCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategoryArgs
  ): Promise<Category | null> {
    return CategoryCrudResolver.prototype.deleteCategory(ctx, info, args);
  }
}
