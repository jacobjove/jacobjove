import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Category } from "../../../models/Category";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class FindUniqueCategoryResolver {
  @TypeGraphQL.Query((_returns) => Category, { nullable: true })
  async category(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategoryArgs
  ): Promise<Category | null> {
    return CategoryCrudResolver.prototype.category(ctx, info, args);
  }
}
