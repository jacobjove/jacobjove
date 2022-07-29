import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarAvgAggregate } from "../outputs/CalendarAvgAggregate";
import { CalendarCountAggregate } from "../outputs/CalendarCountAggregate";
import { CalendarMaxAggregate } from "../outputs/CalendarMaxAggregate";
import { CalendarMinAggregate } from "../outputs/CalendarMinAggregate";
import { CalendarSumAggregate } from "../outputs/CalendarSumAggregate";

@TypeGraphQL.ObjectType("AggregateCalendar", {
  isAbstract: true,
})
export class AggregateCalendar {
  @TypeGraphQL.Field(() => CalendarCountAggregate, { nullable: true })
  _count!: CalendarCountAggregate | null;

  @TypeGraphQL.Field(() => CalendarAvgAggregate, { nullable: true })
  _avg!: CalendarAvgAggregate | null;

  @TypeGraphQL.Field(() => CalendarSumAggregate, { nullable: true })
  _sum!: CalendarSumAggregate | null;

  @TypeGraphQL.Field(() => CalendarMinAggregate, { nullable: true })
  _min!: CalendarMinAggregate | null;

  @TypeGraphQL.Field(() => CalendarMaxAggregate, { nullable: true })
  _max!: CalendarMaxAggregate | null;
}
