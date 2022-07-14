import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("CalendarEventMinAggregate", {
  isAbstract: true,
})
export class CalendarEventMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  uid!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remoteId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  calendarId!: string | null;

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
    nullable: true,
  })
  title!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  start!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  end!: Date | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  allDay!: boolean | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notes!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  canceled!: boolean | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;
}
