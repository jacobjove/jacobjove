import { USE_FIREBASE } from "@/config";
import { ApolloContext } from "@/graphql/context";
import { firestore } from "@/utils/firebase/admin";
import { GraphQLResolveInfo } from "graphql";
import graphqlFields from "graphql-fields";
import * as TypeGraphQL from "type-graphql";
import {
  getFirestoreDocDataFromSnapshot,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformFields,
} from "../../../helpers";
import { Calendar } from "../../../models/Calendar";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateCalendar } from "../../outputs/AggregateCalendar";
import { CalendarGroupBy } from "../../outputs/CalendarGroupBy";
import { AggregateCalendarArgs } from "./args/AggregateCalendarArgs";
import { CreateCalendarArgs } from "./args/CreateCalendarArgs";
import { CreateManyCalendarArgs } from "./args/CreateManyCalendarArgs";
import { DeleteCalendarArgs } from "./args/DeleteCalendarArgs";
import { DeleteManyCalendarArgs } from "./args/DeleteManyCalendarArgs";
import { FindFirstCalendarArgs } from "./args/FindFirstCalendarArgs";
import { FindManyCalendarArgs } from "./args/FindManyCalendarArgs";
import { FindUniqueCalendarArgs } from "./args/FindUniqueCalendarArgs";
import { GroupByCalendarArgs } from "./args/GroupByCalendarArgs";
import { UpdateCalendarArgs } from "./args/UpdateCalendarArgs";
import { UpdateManyCalendarArgs } from "./args/UpdateManyCalendarArgs";
import { UpsertCalendarArgs } from "./args/UpsertCalendarArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class CalendarCrudResolver {
  @TypeGraphQL.Query((_returns) => Calendar, {
    nullable: true,
  })
  async calendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueCalendarArgs
  ): Promise<Calendar | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => Calendar, {
    nullable: true,
  })
  async findFirstCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCalendarArgs
  ): Promise<Calendar | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [Calendar], {
    nullable: false,
  })
  async calendars(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCalendarArgs
  ): Promise<Calendar[]> {
    const { _count } = transformFields(graphqlFields(info));
    if (!USE_FIREBASE) {
      return getPrismaFromContext(ctx).calendar.findMany({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
    } else {
      const calendarsRef = firestore.collection(`users/${ctx.token?.uid}/calendars`);
      const snapshot = await calendarsRef.get();
      return Promise.all(
        snapshot.docs.map((doc) => getFirestoreDocDataFromSnapshot(doc) as Promise<Calendar>)
      );
    }
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, {
    nullable: false,
  })
  async createCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateCalendarArgs
  ): Promise<Calendar> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, {
    nullable: true,
  })
  async deleteCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteCalendarArgs
  ): Promise<Calendar | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, {
    nullable: true,
  })
  async updateCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateCalendarArgs
  ): Promise<Calendar | null> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyCalendarArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => Calendar, {
    nullable: false,
  })
  async upsertCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertCalendarArgs
  ): Promise<Calendar> {
    const { _count } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => AggregateCalendar, {
    nullable: false,
  })
  async aggregateCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCalendarArgs
  ): Promise<AggregateCalendar> {
    return getPrismaFromContext(ctx).calendar.aggregate({
      ...args,
      ...transformFields(graphqlFields(info)),
    });
  }

  @TypeGraphQL.Query((_returns) => [CalendarGroupBy], {
    nullable: false,
  })
  async groupByCalendar(
    @TypeGraphQL.Ctx() ctx: ApolloContext,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCalendarArgs
  ): Promise<CalendarGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(graphqlFields(info));
    return getPrismaFromContext(ctx).calendar.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
