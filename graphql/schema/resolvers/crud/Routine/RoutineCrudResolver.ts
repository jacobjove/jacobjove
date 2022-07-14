import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Routine } from "../../../models/Routine";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRoutine } from "../../outputs/AggregateRoutine";
import { RoutineGroupBy } from "../../outputs/RoutineGroupBy";
import { AggregateRoutineArgs } from "./args/AggregateRoutineArgs";
import { CreateManyRoutineArgs } from "./args/CreateManyRoutineArgs";
import { CreateRoutineArgs } from "./args/CreateRoutineArgs";
import { DeleteManyRoutineArgs } from "./args/DeleteManyRoutineArgs";
import { DeleteRoutineArgs } from "./args/DeleteRoutineArgs";
import { FindFirstRoutineArgs } from "./args/FindFirstRoutineArgs";
import { FindManyRoutineArgs } from "./args/FindManyRoutineArgs";
import { FindUniqueRoutineArgs } from "./args/FindUniqueRoutineArgs";
import { GroupByRoutineArgs } from "./args/GroupByRoutineArgs";
import { UpdateManyRoutineArgs } from "./args/UpdateManyRoutineArgs";
import { UpdateRoutineArgs } from "./args/UpdateRoutineArgs";
import { UpsertRoutineArgs } from "./args/UpsertRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class RoutineCrudResolver {
  @TypeGraphQL.Query((_returns) => Routine, {
    nullable: true,
  })
  async routine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRoutineArgs
  ): Promise<Routine | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Routine, {
    nullable: true,
  })
  async findFirstRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineArgs
  ): Promise<Routine | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Routine], {
    nullable: false,
  })
  async routines(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineArgs
  ): Promise<Routine[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, {
    nullable: false,
  })
  async createRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineArgs
  ): Promise<Routine> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, {
    nullable: true,
  })
  async deleteRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineArgs
  ): Promise<Routine | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, {
    nullable: true,
  })
  async updateRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineArgs
  ): Promise<Routine | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, {
    nullable: false,
  })
  async upsertRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineArgs
  ): Promise<Routine> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateRoutine, {
    nullable: false,
  })
  async aggregateRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineArgs
  ): Promise<AggregateRoutine> {
    return getPrismaFromContext(ctx).routine.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [RoutineGroupBy], {
    nullable: false,
  })
  async groupByRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByRoutineArgs
  ): Promise<RoutineGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routine.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
