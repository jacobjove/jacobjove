import { ApolloContext } from "@/graphql/context";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  createItem,
  getPrismaFromContext,
  getUserSubcollectionData,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
  updateItem,
} from "../../../helpers";
import { CalendarEvent } from "../../../models/CalendarEvent";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCalendarEvent } from "../../outputs/AggregateCalendarEvent";
import { CalendarEventGroupBy } from "../../outputs/CalendarEventGroupBy";
import { AggregateCalendarEventArgs } from "./args/AggregateCalendarEventArgs";
import { CreateCalendarEventArgs } from "./args/CreateCalendarEventArgs";
import { CreateManyCalendarEventArgs } from "./args/CreateManyCalendarEventArgs";
import { DeleteCalendarEventArgs } from "./args/DeleteCalendarEventArgs";
import { DeleteManyCalendarEventArgs } from "./args/DeleteManyCalendarEventArgs";
import { FindFirstCalendarEventArgs } from "./args/FindFirstCalendarEventArgs";
import { FindManyCalendarEventArgs } from "./args/FindManyCalendarEventArgs";
import { FindUniqueCalendarEventArgs } from "./args/FindUniqueCalendarEventArgs";
import { GroupByCalendarEventArgs } from "./args/GroupByCalendarEventArgs";
import { UpdateCalendarEventArgs } from "./args/UpdateCalendarEventArgs";
import { UpdateManyCalendarEventArgs } from "./args/UpdateManyCalendarEventArgs";
import { UpsertCalendarEventArgs } from "./args/UpsertCalendarEventArgs";

@TypeGraphQL.Resolver((_of) => CalendarEvent)
export class CalendarEventCrudResolver {
  @TypeGraphQL.Query((_returns) => CalendarEvent, {
    nullable: true,
  })
  async calendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => CalendarEvent, {
    nullable: true,
  })
  async findFirstCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [CalendarEvent], {
    nullable: false,
  })
  async calendarEvents(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarEventArgs
  ): Promise<CalendarEvent[]> {
    return getUserSubcollectionData("calendarEvents", ctx, info, args) as Promise<CalendarEvent[]>;
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, {
    nullable: false,
  })
  async createCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCalendarEventArgs
  ): Promise<CalendarEvent> {
    return createItem("calendarEvents", ctx, info, args) as Promise<CalendarEvent>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, {
    nullable: true,
  })
  async deleteCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, {
    nullable: true,
  })
  async updateCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCalendarEventArgs
  ): Promise<CalendarEvent | null> {
    return updateItem("calendarEvents", ctx, info, args, true) as Promise<CalendarEvent | null>;
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCalendarEventArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => CalendarEvent, {
    nullable: false,
  })
  async upsertCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCalendarEventArgs
  ): Promise<CalendarEvent> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateCalendarEvent, {
    nullable: false,
  })
  async aggregateCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCalendarEventArgs
  ): Promise<AggregateCalendarEvent> {
    return getPrismaFromContext(ctx).calendarEvent.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [CalendarEventGroupBy], {
    nullable: false,
  })
  async groupByCalendarEvent(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCalendarEventArgs
  ): Promise<CalendarEventGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendarEvent.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
