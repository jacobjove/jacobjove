import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Category } from "../../../models/Category";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategory } from "../../outputs/AggregateCategory";
import { AggregateCategoryArgs } from "./args/AggregateCategoryArgs";
import { CreateCategoryArgs } from "./args/CreateCategoryArgs";
import { CreateManyCategoryArgs } from "./args/CreateManyCategoryArgs";
import { DeleteCategoryArgs } from "./args/DeleteCategoryArgs";
import { DeleteManyCategoryArgs } from "./args/DeleteManyCategoryArgs";
import { FindFirstCategoryArgs } from "./args/FindFirstCategoryArgs";
import { FindManyCategoryArgs } from "./args/FindManyCategoryArgs";
import { FindUniqueCategoryArgs } from "./args/FindUniqueCategoryArgs";
import { UpdateCategoryArgs } from "./args/UpdateCategoryArgs";
import { UpdateManyCategoryArgs } from "./args/UpdateManyCategoryArgs";
import { UpsertCategoryArgs } from "./args/UpsertCategoryArgs";

@TypeGraphQL.Resolver((_of) => Category)
export class CategoryCrudResolver {
  @TypeGraphQL.Query((_returns) => Category, { nullable: true })
  async category(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategoryArgs
  ): Promise<Category | null> {
    return getPrismaFromContext(ctx).category.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Category, { nullable: true })
  async findFirstCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategoryArgs
  ): Promise<Category | null> {
    return getPrismaFromContext(ctx).category.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Category], { nullable: false })
  async categories(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategoryArgs
  ): Promise<Category[]> {
    return getPrismaFromContext(ctx).category.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Category, { nullable: false })
  async createCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategoryArgs
  ): Promise<Category> {
    return getPrismaFromContext(ctx).category.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategoryArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).category.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Category, { nullable: true })
  async deleteCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategoryArgs
  ): Promise<Category | null> {
    return getPrismaFromContext(ctx).category.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Category, { nullable: true })
  async updateCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategoryArgs
  ): Promise<Category | null> {
    return getPrismaFromContext(ctx).category.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategoryArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).category.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategoryArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).category.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Category, { nullable: false })
  async upsertCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategoryArgs
  ): Promise<Category> {
    return getPrismaFromContext(ctx).category.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateCategory, { nullable: false })
  async aggregateCategory(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategoryArgs
  ): Promise<AggregateCategory> {
    return getPrismaFromContext(ctx).category.aggregate({
      ...args,
    });
  }
}
