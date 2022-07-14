import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.InputType("CalendarEventCreateManyTaskInput", {
  isAbstract: true,
})
export class CalendarEventCreateManyTaskInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  remoteId?: string | null | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  calendarId!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  scheduleId?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId?: string | undefined;

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
  end?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  allDay?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notes?: string | null | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  canceled?: boolean | null | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;
}
