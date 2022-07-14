import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql";
import { Category } from "../../../models/Category";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class CreateCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => Category, {
    nullable: false,
  })
  async createCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategoryArgs
  ): Promise<Category> {
    return CategoryCrudResolver.prototype.createCategory(ctx, info, args);
  }
}
