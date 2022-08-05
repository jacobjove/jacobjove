import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutScheduleInput } from "../inputs/CalendarEventCreateWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateOrConnectWithoutScheduleInput", { isAbstract: true })
export class CalendarEventCreateOrConnectWithoutScheduleInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventCreateWithoutScheduleInput, { nullable: false })
  create!: CalendarEventCreateWithoutScheduleInput;
}
