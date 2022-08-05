import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyCalendarInputEnvelope } from "../inputs/CalendarEventCreateManyCalendarInputEnvelope";
import { CalendarEventCreateOrConnectWithoutCalendarInput } from "../inputs/CalendarEventCreateOrConnectWithoutCalendarInput";
import { CalendarEventCreateWithoutCalendarInput } from "../inputs/CalendarEventCreateWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutCalendarInput", { isAbstract: true })
export class CalendarEventCreateNestedManyWithoutCalendarInput {
  @TypeGraphQL.Field(() => [CalendarEventCreateWithoutCalendarInput], { nullable: true })
  create?: CalendarEventCreateWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventCreateOrConnectWithoutCalendarInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateManyCalendarInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyCalendarInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
