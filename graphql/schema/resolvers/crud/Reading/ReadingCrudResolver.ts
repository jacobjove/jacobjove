import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Reading } from "../../../models/Reading";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateReading } from "../../outputs/AggregateReading";
import { ReadingGroupBy } from "../../outputs/ReadingGroupBy";
import { AggregateReadingArgs } from "./args/AggregateReadingArgs";
import { CreateManyReadingArgs } from "./args/CreateManyReadingArgs";
import { CreateReadingArgs } from "./args/CreateReadingArgs";
import { DeleteManyReadingArgs } from "./args/DeleteManyReadingArgs";
import { DeleteReadingArgs } from "./args/DeleteReadingArgs";
import { FindFirstReadingArgs } from "./args/FindFirstReadingArgs";
import { FindManyReadingArgs } from "./args/FindManyReadingArgs";
import { FindUniqueReadingArgs } from "./args/FindUniqueReadingArgs";
import { GroupByReadingArgs } from "./args/GroupByReadingArgs";
import { UpdateManyReadingArgs } from "./args/UpdateManyReadingArgs";
import { UpdateReadingArgs } from "./args/UpdateReadingArgs";
import { UpsertReadingArgs } from "./args/UpsertReadingArgs";

@TypeGraphQL.Resolver((_of) => Reading)
export class ReadingCrudResolver {
  @TypeGraphQL.Query((_returns) => Reading, {
    nullable: true,
  })
  async reading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueReadingArgs
  ): Promise<Reading | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Reading, {
    nullable: true,
  })
  async findFirstReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstReadingArgs
  ): Promise<Reading | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Reading], {
    nullable: false,
  })
  async readings(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyReadingArgs
  ): Promise<Reading[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Reading, {
    nullable: false,
  })
  async createReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateReadingArgs
  ): Promise<Reading> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Reading, {
    nullable: true,
  })
  async deleteReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteReadingArgs
  ): Promise<Reading | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Reading, {
    nullable: true,
  })
  async updateReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateReadingArgs
  ): Promise<Reading | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyReadingArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Reading, {
    nullable: false,
  })
  async upsertReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertReadingArgs
  ): Promise<Reading> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateReading, {
    nullable: false,
  })
  async aggregateReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateReadingArgs
  ): Promise<AggregateReading> {
    return getPrismaFromContext(ctx).reading.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ReadingGroupBy], {
    nullable: false,
  })
  async groupByReading(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByReadingArgs
  ): Promise<ReadingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).reading.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
