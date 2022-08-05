import { GqlContext } from "@/graphql/context";
import { Categorization } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCategorizationArgs
  ): Promise<Categorization | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Categorization, { nullable: true })
  async findFirstCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCategorizationArgs
  ): Promise<Categorization | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Categorization], { nullable: false })
  async categorizations(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCategorizationArgs
  ): Promise<Categorization[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: false })
  async createCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCategorizationArgs
  ): Promise<Categorization> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: true })
  async deleteCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCategorizationArgs
  ): Promise<Categorization | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: true })
  async updateCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCategorizationArgs
  ): Promise<Categorization | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCategorizationArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Categorization, { nullable: false })
  async upsertCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCategorizationArgs
  ): Promise<Categorization> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateCategorization, { nullable: false })
  async aggregateCategorization(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCategorizationArgs
  ): Promise<AggregateCategorization> {
    throw new Error("Not implemented");
  }
}
