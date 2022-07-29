import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateWithoutScheduleInput } from "../inputs/CalendarEventUpdateWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateWithWhereUniqueWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventUpdateWithWhereUniqueWithoutScheduleInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateWithoutScheduleInput, { nullable: false })
  data!: CalendarEventUpdateWithoutScheduleInput;
}
