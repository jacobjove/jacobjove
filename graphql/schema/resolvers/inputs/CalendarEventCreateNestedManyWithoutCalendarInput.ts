import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyCalendarInputEnvelope } from "../inputs/CalendarEventCreateManyCalendarInputEnvelope";
import { CalendarEventCreateOrConnectWithoutCalendarInput } from "../inputs/CalendarEventCreateOrConnectWithoutCalendarInput";
import { CalendarEventCreateWithoutCalendarInput } from "../inputs/CalendarEventCreateWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventCreateNestedManyWithoutCalendarInput {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutCalendarInput], {
    nullable: true,
  })
  create?: CalendarEventCreateWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutCalendarInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyCalendarInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarEventCreateManyCalendarInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
