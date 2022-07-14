import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { CalendarEventAvgAggregate } from "../outputs/CalendarEventAvgAggregate";
import { CalendarEventCountAggregate } from "../outputs/CalendarEventCountAggregate";
import { CalendarEventMaxAggregate } from "../outputs/CalendarEventMaxAggregate";
import { CalendarEventMinAggregate } from "../outputs/CalendarEventMinAggregate";
import { CalendarEventSumAggregate } from "../outputs/CalendarEventSumAggregate";

@TypeGraphQL.ObjectType("CalendarEventGroupBy", {
  isAbstract: true,
})
export class CalendarEventGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  uid!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remoteId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  calendarId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  scheduleId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  taskId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  start!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  end!: Date | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  allDay!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notes!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  canceled!: boolean | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

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
