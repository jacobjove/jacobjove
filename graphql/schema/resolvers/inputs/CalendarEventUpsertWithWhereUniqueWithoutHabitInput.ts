import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutHabitInput } from "../inputs/CalendarEventCreateWithoutHabitInput";
import { CalendarEventUpdateWithoutHabitInput } from "../inputs/CalendarEventUpdateWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class CalendarEventUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateWithoutHabitInput, { nullable: false })
  update!: CalendarEventUpdateWithoutHabitInput;

  @TypeGraphQL.Field(() => CalendarEventCreateWithoutHabitInput, { nullable: false })
  create!: CalendarEventCreateWithoutHabitInput;
}
