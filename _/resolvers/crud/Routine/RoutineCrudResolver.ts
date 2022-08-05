import { GqlContext } from "@/graphql/context";
import { Routine } from "@/graphql/schema/generated/models";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
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
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueRoutineArgs
  ): Promise<Routine | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Routine, { nullable: true })
  async findFirstRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstRoutineArgs
  ): Promise<Routine | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Routine], { nullable: false })
  async routines(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyRoutineArgs
  ): Promise<Routine[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: false })
  async createRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateRoutineArgs
  ): Promise<Routine> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: true })
  async deleteRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteRoutineArgs
  ): Promise<Routine | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: true })
  async updateRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateRoutineArgs
  ): Promise<Routine | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyRoutineArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Routine, { nullable: false })
  async upsertRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertRoutineArgs
  ): Promise<Routine> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateRoutine, { nullable: false })
  async aggregateRoutine(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateRoutineArgs
  ): Promise<AggregateRoutine> {
    throw new Error("Not implemented");
  }
}
