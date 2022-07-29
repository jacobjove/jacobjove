import { ApolloContext } from "@/graphql/context";
import { CategoryCrudResolver } from "@/graphql/schema/resolvers/crud/Category/CategoryCrudResolver";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { Category } from "../../../models/Category";
import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class UpsertCategoryResolver {
  @TypeGraphQL.Mutation((_returns) => Category, { nullable: false })
  async upsertCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategoryArgs
  ): Promise<Category> {
    return CategoryCrudResolver.prototype.upsertCategory(ctx, info, args);
  }
}
