/* Do not edit this file. It was generated programmatically. */

import { GqlContext } from "@/graphql/context";
import {
  ArgsForUpdatingManyCalendars,
  CalendarCreationArgs,
  CalendarsCreationArgs,
  CalendarUpdateArgs,
  CalendarUpsertionArgs,
  DeleteCalendarArgs,
  DeleteManyCalendarArgs,
  FindManyCalendarArgs,
  FindUniqueCalendarArgs,
} from "@/graphql/generated/args/calendar.args";
import CalendarModel from "@/graphql/generated/models/calendar.model";
import UserModel from "@/graphql/generated/models/user.model";
import { Calendar } from "@/graphql/generated/types/calendar.type";
import { convertFilterForMongo } from "@/graphql/schema/helpers";
import { ObjectIdScalar } from "@/graphql/schema/scalars";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.Resolver(() => Calendar)
export class CalendarResolver {
  @TypeGraphQL.FieldResolver(() => ObjectIdScalar)
  id(@TypeGraphQL.Root() calendar: Calendar) {
    return calendar._id;
  }

  @TypeGraphQL.Query(() => Calendar, { nullable: true })
  async calendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarArgs
  ): Promise<Calendar | null> {
    const filter = convertFilterForMongo(args.where);
    return CalendarModel.findOne(filter);
  }

  @TypeGraphQL.Query(() => [Calendar], { nullable: false })
  async calendars(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarArgs
  ): Promise<Calendar[]> {
    const filter = convertFilterForMongo(args.where);
    return CalendarModel.find(filter ?? {});
  }

  @TypeGraphQL.Mutation(() => Calendar)
  async createCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CalendarCreationArgs
  ) {
    const calendar = await CalendarModel.create(args.data);
    if (calendar) {
      // NOTE: This update fails if it's not awaited.
      await UserModel.findOneAndUpdate(
        { _id: calendar.userId },
        { $push: { calendars: { ...calendar } } }
      );
    }
    return calendar;
  }

  @TypeGraphQL.Mutation(() => [Calendar], { nullable: false })
  async createManyCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CalendarsCreationArgs
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Calendar)
  async updateCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CalendarUpdateArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const calendar = await CalendarModel.findOneAndUpdate(filter, args.data, {
      returnDocument: "after",
    });
    // NOTE: This update fails if it's not awaited.
    calendar &&
      (await UserModel.findOneAndUpdate(
        { _id: calendar.userId, "calendars._id": calendar._id },
        {
          $set: { "calendars.$": { ...calendar } },
        }
      ));
    return calendar;
  }

  @TypeGraphQL.Mutation(() => Calendar)
  async upsertCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CalendarUpsertionArgs
  ) {
    const filter = convertFilterForMongo(args.where);
    const calendar = await CalendarModel.findOneAndUpdate(filter, args.data, {
      upsert: true,
      new: true,
      returnDocument: "after",
    });
    return calendar;
  }

  @TypeGraphQL.Mutation(() => [Calendar], { nullable: false })
  async updateCalendars(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyCalendars
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Calendar], { nullable: false })
  async updateCalendarsDistinctly(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ArgsForUpdatingManyCalendars
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => Calendar, { nullable: true })
  async deleteCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarArgs
  ): Promise<Calendar | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.Mutation(() => [Calendar], { nullable: false })
  async deleteManyCalendar(
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarArgs
  ): Promise<Calendar[]> {
    throw new Error("Not implemented");
  }
}
