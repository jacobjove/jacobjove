import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getPrismaFromContext } from "../../../helpers";
import { Routine } from "../../../models/Routine";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateRoutine } from "../../outputs/AggregateRoutine";
import { AggregateRoutineArgs } from "./args/AggregateRoutineArgs";
import { CreateManyRoutineArgs } from "./args/CreateManyRoutineArgs";
import { CreateRoutineArgs } from "./args/CreateRoutineArgs";
import { DeleteManyRoutineArgs } from "./args/DeleteManyRoutineArgs";
import { DeleteRoutineArgs } from "./args/DeleteRoutineArgs";
import { FindFirstRoutineArgs } from "./args/FindFirstRoutineArgs";
import { FindManyRoutineArgs } from "./args/FindManyRoutineArgs";
import { FindUniqueRoutineArgs } from "./args/FindUniqueRoutineArgs";
import { UpdateManyRoutineArgs } from "./args/UpdateManyRoutineArgs";
import { UpdateRoutineArgs } from "./args/UpdateRoutineArgs";
import { UpsertRoutineArgs } from "./args/UpsertRoutineArgs";

@TypeGraphQL.Resolver((_of) => Routine)
export class RoutineCrudResolver {
  @TypeGraphQL.Query((_returns) => Routine, { nullable: true })
  async routine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRoutineArgs
  ): Promise<Routine | null> {
    return getPrismaFromContext(ctx).routine.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Routine, { nullable: true })
  async findFirstRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineArgs
  ): Promise<Routine | null> {
    return getPrismaFromContext(ctx).routine.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Routine], { nullable: false })
  async routines(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineArgs
  ): Promise<Routine[]> {
    return getPrismaFromContext(ctx).routine.findMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: false })
  async createRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineArgs
  ): Promise<Routine> {
    return getPrismaFromContext(ctx).routine.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).routine.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: true })
  async deleteRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineArgs
  ): Promise<Routine | null> {
    return getPrismaFromContext(ctx).routine.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: true })
  async updateRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineArgs
  ): Promise<Routine | null> {
    return getPrismaFromContext(ctx).routine.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).routine.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).routine.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: false })
  async upsertRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineArgs
  ): Promise<Routine> {
    return getPrismaFromContext(ctx).routine.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateRoutine, { nullable: false })
  async aggregateRoutine(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineArgs
  ): Promise<AggregateRoutine> {
    return getPrismaFromContext(ctx).routine.aggregate({
      ...args,
    });
  }
}
