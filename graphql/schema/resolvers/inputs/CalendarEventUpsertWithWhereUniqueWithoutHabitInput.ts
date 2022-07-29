import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutHabitInput } from "../inputs/CalendarEventCreateWithoutHabitInput";
import { CalendarEventUpdateWithoutHabitInput } from "../inputs/CalendarEventUpdateWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class CalendarEventUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateWithoutHabitInput, { nullable: false })
  update!: CalendarEventUpdateWithoutHabitInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateWithoutHabitInput, { nullable: false })
  create!: CalendarEventCreateWithoutHabitInput;
}
