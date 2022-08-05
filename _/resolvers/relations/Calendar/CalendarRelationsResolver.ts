import { GqlContext } from "@/graphql/context";
import { Account } from "@/graphql/schema/generated/models/account.model";
import { Calendar } from "@/graphql/schema/generated/models/calendar.model";
import { CalendarEvent } from "@/graphql/schema/generated/models/calendarEvent.model";
import { User } from "@/graphql/schema/generated/models/user.model";
import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventsArgs } from "./args/CalendarEventsArgs";

@TypeGraphQL.Resolver((_of) => Calendar)
export class CalendarRelationsResolver {
  @TypeGraphQL.FieldResolver(() => User, { nullable: false })
  async user(
    @TypeGraphQL.Root() calendar: Calendar,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<User> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => Account, { nullable: true })
  async account(
    @TypeGraphQL.Root() calendar: Calendar,
    @TypeGraphQL.Ctx() ctx: GqlContext
  ): Promise<Account | null> {
    throw new Error("Not implemented");
  }

  @TypeGraphQL.FieldResolver(() => [CalendarEvent], { nullable: false })
  async events(
    @TypeGraphQL.Root() calendar: Calendar,
    @TypeGraphQL.Ctx() ctx: GqlContext,
    @TypeGraphQL.Args() args: CalendarEventsArgs
  ): Promise<CalendarEvent[]> {
    throw new Error("Not implemented");
  }
}
