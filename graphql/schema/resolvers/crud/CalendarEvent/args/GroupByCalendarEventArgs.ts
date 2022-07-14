import * as TypeGraphQL from "type-graphql";
import { CalendarEventScalarFieldEnum } from "../../../../enums/CalendarEventScalarFieldEnum";
import { CalendarEventOrderByWithAggregationInput } from "../../../inputs/CalendarEventOrderByWithAggregationInput";
import { CalendarEventScalarWhereWithAggregatesInput } from "../../../inputs/CalendarEventScalarWhereWithAggregatesInput";
import { CalendarEventWhereInput } from "../../../inputs/CalendarEventWhereInput";

@TypeGraphQL.ArgsType()
export class GroupByCalendarEventArgs {
  @TypeGraphQL.Field((_type) => CalendarEventWhereInput, {
    nullable: true,
  })
  where?: CalendarEventWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: CalendarEventOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "uid"
    | "remoteId"
    | "calendarId"
    | "scheduleId"
    | "habitId"
    | "taskId"
    | "title"
    | "start"
    | "end"
    | "allDay"
    | "notes"
    | "canceled"
    | "createdAt"
    | "updatedAt"
    | "archivedAt"
  >;

  @TypeGraphQL.Field((_type) => CalendarEventScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: CalendarEventScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
