import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getItem,
  getPrismaFromContext,
  getUserSubcollectionData,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Habit } from "../../../models/Habit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHabit } from "../../outputs/AggregateHabit";
import { HabitGroupBy } from "../../outputs/HabitGroupBy";
import { AggregateHabitArgs } from "./args/AggregateHabitArgs";
import { CreateHabitArgs } from "./args/CreateHabitArgs";
import { CreateManyHabitArgs } from "./args/CreateManyHabitArgs";
import { DeleteHabitArgs } from "./args/DeleteHabitArgs";
import { DeleteManyHabitArgs } from "./args/DeleteManyHabitArgs";
import { FindFirstHabitArgs } from "./args/FindFirstHabitArgs";
import { FindManyHabitArgs } from "./args/FindManyHabitArgs";
import { FindUniqueHabitArgs } from "./args/FindUniqueHabitArgs";
import { GroupByHabitArgs } from "./args/GroupByHabitArgs";
import { UpdateHabitArgs } from "./args/UpdateHabitArgs";
import { UpdateManyHabitArgs } from "./args/UpdateManyHabitArgs";
import { UpsertHabitArgs } from "./args/UpsertHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class HabitCrudResolver {
  @TypeGraphQL.Query((_returns) => Habit, {
    nullable: true,
  })
  async habit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueHabitArgs
  ): Promise<Habit | null> {
    return getItem("habits", ctx, info, args) as Promise<Habit | null>;
  }

  @TypeGraphQL.Query((_returns) => Habit, {
    nullable: true,
  })
  async findFirstHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstHabitArgs
  ): Promise<Habit | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Habit], {
    nullable: false,
  })
  async habits(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyHabitArgs
  ): Promise<Habit[]> {
    return getUserSubcollectionData("habits", ctx, info, args) as Promise<Habit[]>;
  }

  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: false,
  })
  async createHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateHabitArgs
  ): Promise<Habit> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: true,
  })
  async deleteHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteHabitArgs
  ): Promise<Habit | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: true,
  })
  async updateHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateHabitArgs
  ): Promise<Habit | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Habit, {
    nullable: false,
  })
  async upsertHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertHabitArgs
  ): Promise<Habit> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateHabit, {
    nullable: false,
  })
  async aggregateHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateHabitArgs
  ): Promise<AggregateHabit> {
    return getPrismaFromContext(ctx).habit.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [HabitGroupBy], {
    nullable: false,
  })
  async groupByHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByHabitArgs
  ): Promise<HabitGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).habit.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
