import { GqlContext } from "@/graphql/context";
import { CalendarEvent } from "@/graphql/schema/generated/models/calendarEvent.model";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCalendarEvent } from "../../outputs/AggregateCalendarEvent";
import { AggregateCalendarEventArgs } from "./args/AggregateCalendarEventArgs";
import { CreateCalendarEventArgs } from "./args/CreateCalendarEventArgs";
import { CreateManyCalendarEventArgs } from "./args/CreateManyCalendarEventArgs";
import { DeleteCalendarEventArgs } from "./args/DeleteCalendarEventArgs";
import { DeleteManyCalendarEventArgs } from "./args/DeleteManyCalendarEventArgs";
import { FindFirstCalendarEventArgs } from "./args/FindFirstCalendarEventArgs";
import { FindManyCalendarEventArgs } from "./args/FindManyCalendarEventArgs";
import { FindUniqueCalendarEventArgs } from "./args/FindUniqueCalendarEventArgs";
import { UpdateCalendarEventArgs } from "./args/UpdateCalendarEventArgs";
import { UpdateManyCalendarEventArgs } from "./args/UpdateManyCalendarEventArgs";
import { UpsertCalendarEventArgs } from "./args/UpsertCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class CalendarEventCrudResolver {
  @TypeGraphQL.Query((_returns) => CalendarEvent, { nullable: true })
  async calendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => CalendarEvent, { nullable: true })
  async findFirstCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => [CalendarEvent], { nullable: false })
  async calendarEvents(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarEventArgs
  ): Promise<CalendarEvent[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, { nullable: false })
  async createCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCalendarEventArgs
  ): Promise<CalendarEvent> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, { nullable: true })
  async deleteCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, { nullable: true })
  async updateCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, { nullable: false })
  async upsertCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCalendarEventArgs
  ): Promise<CalendarEvent> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Query((_returns) => AggregateCalendarEvent, { nullable: false })
  async aggregateCalendarEvent(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCalendarEventArgs
  ): Promise<AggregateCalendarEvent> {
    throw new Error("Not implemented");
  }
}
