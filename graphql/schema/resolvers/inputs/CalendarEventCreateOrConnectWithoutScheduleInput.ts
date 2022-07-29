import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutScheduleInput } from "../inputs/CalendarEventCreateWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateOrConnectWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventCreateOrConnectWithoutScheduleInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateWithoutScheduleInput, { nullable: false })
  create!: CalendarEventCreateWithoutScheduleInput;
}
