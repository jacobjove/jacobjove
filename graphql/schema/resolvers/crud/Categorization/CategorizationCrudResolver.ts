import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Categorization } from "../../../models/Categorization";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCategorization } from "../../outputs/AggregateCategorization";
import { AggregateCategorizationArgs } from "./args/AggregateCategorizationArgs";
import { CreateCategorizationArgs } from "./args/CreateCategorizationArgs";
import { CreateManyCategorizationArgs } from "./args/CreateManyCategorizationArgs";
import { DeleteCategorizationArgs } from "./args/DeleteCategorizationArgs";
import { DeleteManyCategorizationArgs } from "./args/DeleteManyCategorizationArgs";
import { FindFirstCategorizationArgs } from "./args/FindFirstCategorizationArgs";
import { FindManyCategorizationArgs } from "./args/FindManyCategorizationArgs";
import { FindUniqueCategorizationArgs } from "./args/FindUniqueCategorizationArgs";
import { UpdateCategorizationArgs } from "./args/UpdateCategorizationArgs";
import { UpdateManyCategorizationArgs } from "./args/UpdateManyCategorizationArgs";
import { UpsertCategorizationArgs } from "./args/UpsertCategorizationArgs";

@TypeGraphQL.Resolver((_of) => Categorization)
export class CategorizationCrudResolver {
  @TypeGraphQL.Query((_returns) => Categorization, { nullable: true })
  async categorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategorizationArgs
  ): Promise<Categorization | null> {
    return getPrismaFromContext(ctx).categorization.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Categorization, { nullable: true })
  async findFirstCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategorizationArgs
  ): Promise<Categorization | null> {
    return getPrismaFromContext(ctx).categorization.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Categorization], { nullable: false })
  async categorizations(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategorizationArgs
  ): Promise<Categorization[]> {
    return getPrismaFromContext(ctx).categorization.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: false })
  async createCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategorizationArgs
  ): Promise<Categorization> {
    return getPrismaFromContext(ctx).categorization.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).categorization.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: true })
  async deleteCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategorizationArgs
  ): Promise<Categorization | null> {
    return getPrismaFromContext(ctx).categorization.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: true })
  async updateCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategorizationArgs
  ): Promise<Categorization | null> {
    return getPrismaFromContext(ctx).categorization.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).categorization.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).categorization.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: false })
  async upsertCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategorizationArgs
  ): Promise<Categorization> {
    return getPrismaFromContext(ctx).categorization.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateCategorization, { nullable: false })
  async aggregateCategorization(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategorizationArgs
  ): Promise<AggregateCategorization> {
    return getPrismaFromContext(ctx).categorization.aggregate({
      ...args,
    });
  }
}
