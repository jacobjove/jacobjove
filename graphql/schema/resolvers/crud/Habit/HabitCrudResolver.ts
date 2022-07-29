import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getItem, getPrismaFromContext, getUserSubcollectionData } from "../../../helpers";
import { Habit } from "../../../models/Habit";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateHabit } from "../../outputs/AggregateHabit";
import { AggregateHabitArgs } from "./args/AggregateHabitArgs";
import { CreateHabitArgs } from "./args/CreateHabitArgs";
import { CreateManyHabitArgs } from "./args/CreateManyHabitArgs";
import { DeleteHabitArgs } from "./args/DeleteHabitArgs";
import { DeleteManyHabitArgs } from "./args/DeleteManyHabitArgs";
import { FindFirstHabitArgs } from "./args/FindFirstHabitArgs";
import { FindManyHabitArgs } from "./args/FindManyHabitArgs";
import { FindUniqueHabitArgs } from "./args/FindUniqueHabitArgs";
import { UpdateHabitArgs } from "./args/UpdateHabitArgs";
import { UpdateManyHabitArgs } from "./args/UpdateManyHabitArgs";
import { UpsertHabitArgs } from "./args/UpsertHabitArgs";

@TypeGraphQL.Resolver((_of) => Habit)
export class HabitCrudResolver {
  @TypeGraphQL.Query((_returns) => Habit, { nullable: true })
  async habit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueHabitArgs
  ): Promise<Habit | null> {
    return getItem("habits", ctx, info, args) as Promise<Habit | null>;
  }

  @TypeGraphQL.Query((_returns) => Habit, { nullable: true })
  async findFirstHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstHabitArgs
  ): Promise<Habit | null> {
    return getPrismaFromContext(ctx).habit.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Habit], { nullable: false })
  async habits(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyHabitArgs
  ): Promise<Habit[]> {
    return getUserSubcollectionData("habits", ctx, info, args) as Promise<Habit[]>;
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: false })
  async createHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateHabitArgs
  ): Promise<Habit> {
    return getPrismaFromContext(ctx).habit.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).habit.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: true })
  async deleteHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteHabitArgs
  ): Promise<Habit | null> {
    return getPrismaFromContext(ctx).habit.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: true })
  async updateHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateHabitArgs
  ): Promise<Habit | null> {
    return getPrismaFromContext(ctx).habit.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).habit.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyHabitArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).habit.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Habit, { nullable: false })
  async upsertHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertHabitArgs
  ): Promise<Habit> {
    return getPrismaFromContext(ctx).habit.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateHabit, { nullable: false })
  async aggregateHabit(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateHabitArgs
  ): Promise<AggregateHabit> {
    return getPrismaFromContext(ctx).habit.aggregate({
      ...args,
    });
  }
}
