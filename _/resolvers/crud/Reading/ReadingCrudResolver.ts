import { GqlContext } from "@/graphql/context";
import { Reading } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReading } from "../../outputs/AggregateReading";
import { AggregateReadingArgs } from "./args/AggregateReadingArgs";
import { CreateManyReadingArgs } from "./args/CreateManyReadingArgs";
import { CreateReadingArgs } from "./args/CreateReadingArgs";
import { DeleteManyReadingArgs } from "./args/DeleteManyReadingArgs";
import { DeleteReadingArgs } from "./args/DeleteReadingArgs";
import { FindFirstReadingArgs } from "./args/FindFirstReadingArgs";
import { FindManyReadingArgs } from "./args/FindManyReadingArgs";
import { FindUniqueReadingArgs } from "./args/FindUniqueReadingArgs";
import { UpdateManyReadingArgs } from "./args/UpdateManyReadingArgs";
import { UpdateReadingArgs } from "./args/UpdateReadingArgs";
import { UpsertReadingArgs } from "./args/UpsertReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class ReadingCrudResolver {
  @TypeGraphQL.Query((_returns) => Reading, { nullable: true })
  async reading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueReadingArgs
  ): Promise<Reading | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Reading, { nullable: true })
  async findFirstReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstReadingArgs
  ): Promise<Reading | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Reading], { nullable: false })
  async readings(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyReadingArgs
  ): Promise<Reading[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Reading, { nullable: false })
  async createReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateReadingArgs
  ): Promise<Reading> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Reading, { nullable: true })
  async deleteReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteReadingArgs
  ): Promise<Reading | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Reading, { nullable: true })
  async updateReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateReadingArgs
  ): Promise<Reading | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Reading, { nullable: false })
  async upsertReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertReadingArgs
  ): Promise<Reading> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateReading, { nullable: false })
  async aggregateReading(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateReadingArgs
  ): Promise<AggregateReading> {
    throw new Error("Not implemented");
  }
}
