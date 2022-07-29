import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Category } from "../../../models/Category";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class UpdateCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => Category, { nullable: true })
  async updateCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategoryArgs
  ): Promise<Category | null> {
    return CategoryCrudResolver.prototype.updateCategory(ctx, info, args);
  }
}
