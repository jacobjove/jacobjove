import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CalendarEventMinAggregate", {
  isAbstract: true,
})
export class CalendarEventMinAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  uid!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  remoteId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  calendarId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  scheduleId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  taskId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  start!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  end!: Date | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  allDay!: boolean | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  notes!: string | null;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  canceled!: boolean | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
