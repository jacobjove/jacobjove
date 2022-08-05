import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { CalendarEventAvgAggregate } from "../outputs/CalendarEventAvgAggregate";
import { CalendarEventCountAggregate } from "../outputs/CalendarEventCountAggregate";
import { CalendarEventMaxAggregate } from "../outputs/CalendarEventMaxAggregate";
import { CalendarEventMinAggregate } from "../outputs/CalendarEventMinAggregate";
import { CalendarEventSumAggregate } from "../outputs/CalendarEventSumAggregate";

@TypeGraphQL.ObjectType("CalendarEventGroupBy", { isAbstract: true })
export class CalendarEventGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  uid!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  calendarId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  scheduleId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  taskId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  start!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  end!: Date | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: false })
  allDay!: boolean;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled!: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

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
