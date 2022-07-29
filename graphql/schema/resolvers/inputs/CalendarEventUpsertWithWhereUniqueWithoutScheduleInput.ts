import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutScheduleInput } from "../inputs/CalendarEventCreateWithoutScheduleInput";
import { CalendarEventUpdateWithoutScheduleInput } from "../inputs/CalendarEventUpdateWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpsertWithWhereUniqueWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventUpsertWithWhereUniqueWithoutScheduleInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateWithoutScheduleInput, { nullable: false })
  update!: CalendarEventUpdateWithoutScheduleInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateWithoutScheduleInput, { nullable: false })
  create!: CalendarEventCreateWithoutScheduleInput;
}
