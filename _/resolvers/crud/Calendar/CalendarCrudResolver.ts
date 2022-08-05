import { GqlContext } from "@/graphql/context";
import { Calendar } from "@/graphql/schema/generated/models/calendar.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCalendar } from "../../outputs/AggregateCalendar";
import { AggregateCalendarArgs } from "./args/AggregateCalendarArgs";
import { CreateCalendarArgs } from "./args/CreateCalendarArgs";
import { CreateManyCalendarArgs } from "./args/CreateManyCalendarArgs";
import { DeleteCalendarArgs } from "./args/DeleteCalendarArgs";
import { DeleteManyCalendarArgs } from "./args/DeleteManyCalendarArgs";
import { FindFirstCalendarArgs } from "./args/FindFirstCalendarArgs";
import { FindManyCalendarArgs } from "./args/FindManyCalendarArgs";
import { FindUniqueCalendarArgs } from "./args/FindUniqueCalendarArgs";
import { UpdateCalendarArgs } from "./args/UpdateCalendarArgs";
import { UpdateManyCalendarArgs } from "./args/UpdateManyCalendarArgs";
import { UpsertCalendarArgs } from "./args/UpsertCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class CalendarCrudResolver {
  @TypeGraphQL.Query((_returns) => Calendar, { nullable: true })
  async calendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarArgs
  ): Promise<Calendar | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => Calendar, { nullable: true })
  async findFirstCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCalendarArgs
  ): Promise<Calendar | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [Calendar], { nullable: false })
  async calendars(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarArgs
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: false })
  async createCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCalendarArgs
  ): Promise<Calendar> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: true })
  async deleteCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarArgs
  ): Promise<Calendar | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: true })
  async updateCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCalendarArgs
  ): Promise<Calendar | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: false })
  async upsertCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCalendarArgs
  ): Promise<Calendar> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateCalendar, { nullable: false })
  async aggregateCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCalendarArgs
  ): Promise<AggregateCalendar> {
    throw new Error("Not implemented");
  }
}
