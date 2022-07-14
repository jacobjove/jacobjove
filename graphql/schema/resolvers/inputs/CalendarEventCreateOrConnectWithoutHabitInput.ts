import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateWithoutHabitInput } from "../inputs/CalendarEventCreateWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class CalendarEventCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, {
    nullable: false,
  })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateWithoutHabitInput, {
    nullable: false,
  })
  create!: CalendarEventCreateWithoutHabitInput;
}
