import * as TypeGraphQL from "type-graphql";
import { CalendarAvgAggregate } from "../outputs/CalendarAvgAggregate";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";
import { CalendarSumAggregate } from "../outputs/CalendarSumAggregate";

@TypeGraphQL.ObjectType("AggregateCalendar", {
  isAbstract: true,
})
export class AggregateCalendar {
  @TypeGraphQL.Field((_type) => CalendarCountAggregate, {
    nullable: true,
  })
  _count!: CalendarCountAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarAvgAggregate, {
    nullable: true,
  })
  _avg!: CalendarAvgAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarSumAggregate, {
    nullable: true,
  })
  _sum!: CalendarSumAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarMinAggregate, {
    nullable: true,
  })
  _min!: CalendarMinAggregate | null;

  @TypeGraphQL.Field((_type) => CalendarMaxAggregate, {
    nullable: true,
  })
  _max!: CalendarMaxAggregate | null;
}
