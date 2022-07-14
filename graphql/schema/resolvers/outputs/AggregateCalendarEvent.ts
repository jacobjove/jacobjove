import * as TypeGraphQL from "type-graphql";
import { CalendarEventAvgAggregate } from "../outputs/CalendarEventAvgAggregate";
import { CalendarEventCountAggregate } from "../outputs/CalendarEventCountAggregate";
import { CalendarEventMaxAggregate } from "../outputs/CalendarEventMaxAggregate";
import { CalendarEventMinAggregate } from "../outputs/CalendarEventMinAggregate";
import { CalendarEventSumAggregate } from "../outputs/CalendarEventSumAggregate";

@TypeGraphQL.ObjectType("AggregateCalendarEvent", {
  isAbstract: true,
})
export class AggregateCalendarEvent {
  @TypeGraphQL.Field((_type) => CalendarEventCountAggregate, {
    nullable: true,
  })
  _count!: CalendarEventCountAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarEventAvgAggregate, {
    nullable: true,
  })
  _avg!: CalendarEventAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarEventSumAggregate, {
    nullable: true,
  })
  _sum!: CalendarEventSumAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarEventMinAggregate, {
    nullable: true,
  })
  _min!: CalendarEventMinAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarEventMaxAggregate, {
    nullable: true,
  })
  _max!: CalendarEventMaxAggregate | null;
}
