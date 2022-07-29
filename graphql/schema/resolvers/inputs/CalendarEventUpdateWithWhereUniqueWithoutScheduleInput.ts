import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateWithoutScheduleInput } from "../inputs/CalendarEventUpdateWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateWithWhereUniqueWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventUpdateWithWhereUniqueWithoutScheduleInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateWithoutScheduleInput, { nullable: false })
  data!: CalendarEventUpdateWithoutScheduleInput;
}
