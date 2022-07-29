import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventAvgAggregate } from "../outputs/CalendarEventAvgAggregate";
import { CalendarEventCountAggregate } from "../outputs/CalendarEventCountAggregate";
import { CalendarEventMaxAggregate } from "../outputs/CalendarEventMaxAggregate";
import { CalendarEventMinAggregate } from "../outputs/CalendarEventMinAggregate";
import { CalendarEventSumAggregate } from "../outputs/CalendarEventSumAggregate";

@TypeGraphQL.ObjectType("AggregateCalendarEvent", {
  isAbstract: true,
})
export class AggregateCalendarEvent {
  @TypeGraphQL.Field(() => CalendarEventCountAggregate, { nullable: true })
  _count!: CalendarEventCountAggregate | null;

  @TypeGraphQL.Field(() => CalendarEventAvgAggregate, { nullable: true })
  _avg!: CalendarEventAvgAggregate | null;

  @TypeGraphQL.Field(() => CalendarEventSumAggregate, { nullable: true })
  _sum!: CalendarEventSumAggregate | null;

  @TypeGraphQL.Field(() => CalendarEventMinAggregate, { nullable: true })
  _min!: CalendarEventMinAggregate | null;

  @TypeGraphQL.Field(() => CalendarEventMaxAggregate, { nullable: true })
  _max!: CalendarEventMaxAggregate | null;
}
