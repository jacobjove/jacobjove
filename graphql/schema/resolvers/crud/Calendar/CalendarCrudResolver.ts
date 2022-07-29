import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { getFirestoreDocDataFromSnapshot, getPrismaFromContext } from "../../../helpers";
import { Calendar } from "../../../models/Calendar";
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
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarArgs
  ): Promise<Calendar | null> {
    return getPrismaFromContext(ctx).calendar.findUnique({ ...args });
  }

  @TypeGraphQL.Query((_returns) => Calendar, { nullable: true })
  async findFirstCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCalendarArgs
  ): Promise<Calendar | null> {
    return getPrismaFromContext(ctx).calendar.findFirst({ ...args });
  }

  @TypeGraphQL.Query((_returns) => [Calendar], { nullable: false })
  async calendars(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarArgs
  ): Promise<Calendar[]> {
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).calendar.findMany({ ...args });
    } else {
      const calendarsRef = firestore.collection(`users/${ctx.session?.user.id}/calendars`);
      const snapshot = await calendarsRef.get();
      return Promise.all(
        snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<Calendar>)
      );
    }
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: false })
  async createCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCalendarArgs
  ): Promise<Calendar> {
    return getPrismaFromContext(ctx).calendar.create({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async createManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).calendar.createMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: true })
  async deleteCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarArgs
  ): Promise<Calendar | null> {
    return getPrismaFromContext(ctx).calendar.delete({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: true })
  async updateCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCalendarArgs
  ): Promise<Calendar | null> {
    return getPrismaFromContext(ctx).calendar.update({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async deleteManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).calendar.deleteMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, { nullable: false })
  async updateManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).calendar.updateMany({ ...args });
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, { nullable: false })
  async upsertCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCalendarArgs
  ): Promise<Calendar> {
    return getPrismaFromContext(ctx).calendar.upsert({ ...args });
  }

  @TypeGraphQL.Query((_returns) => AggregateCalendar, { nullable: false })
  async aggregateCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCalendarArgs
  ): Promise<AggregateCalendar> {
    return getPrismaFromContext(ctx).calendar.aggregate({
      ...args,
    });
  }
}
