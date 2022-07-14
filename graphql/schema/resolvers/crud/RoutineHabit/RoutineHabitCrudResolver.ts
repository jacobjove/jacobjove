import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { RoutineHabit } from "../../../models/RoutineHabit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRoutineHabit } from "../../outputs/AggregateRoutineHabit";
import { RoutineHabitGroupBy } from "../../outputs/RoutineHabitGroupBy";
import { AggregateRoutineHabitArgs } from "./args/AggregateRoutineHabitArgs";
import { CreateManyRoutineHabitArgs } from "./args/CreateManyRoutineHabitArgs";
import { CreateRoutineHabitArgs } from "./args/CreateRoutineHabitArgs";
import { DeleteManyRoutineHabitArgs } from "./args/DeleteManyRoutineHabitArgs";
import { DeleteRoutineHabitArgs } from "./args/DeleteRoutineHabitArgs";
import { FindFirstRoutineHabitArgs } from "./args/FindFirstRoutineHabitArgs";
import { FindManyRoutineHabitArgs } from "./args/FindManyRoutineHabitArgs";
import { FindUniqueRoutineHabitArgs } from "./args/FindUniqueRoutineHabitArgs";
import { GroupByRoutineHabitArgs } from "./args/GroupByRoutineHabitArgs";
import { UpdateManyRoutineHabitArgs } from "./args/UpdateManyRoutineHabitArgs";
import { UpdateRoutineHabitArgs } from "./args/UpdateRoutineHabitArgs";
import { UpsertRoutineHabitArgs } from "./args/UpsertRoutineHabitArgs";

@TypeGraphQL.Resolver((_of) => RoutineHabit)
export class RoutineHabitCrudResolver {
  @TypeGraphQL.Query((_returns) => RoutineHabit, {
    nullable: true,
  })
  async routineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => RoutineHabit, {
    nullable: true,
  })
  async findFirstRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [RoutineHabit], {
    nullable: false,
  })
  async routineHabits(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineHabitArgs
  ): Promise<RoutineHabit[]> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, {
    nullable: false,
  })
  async createRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineHabitArgs
  ): Promise<RoutineHabit> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, {
    nullable: true,
  })
  async deleteRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, {
    nullable: true,
  })
  async updateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineHabitArgs
  ): Promise<RoutineHabit | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineHabitArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => RoutineHabit, {
    nullable: false,
  })
  async upsertRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineHabitArgs
  ): Promise<RoutineHabit> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateRoutineHabit, {
    nullable: false,
  })
  async aggregateRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineHabitArgs
  ): Promise<AggregateRoutineHabit> {
    return getPrismaFromContext(ctx).routineHabit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [RoutineHabitGroupBy], {
    nullable: false,
  })
  async groupByRoutineHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByRoutineHabitArgs
  ): Promise<RoutineHabitGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).routineHabit.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
