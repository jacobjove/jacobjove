import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateWithoutHabitInput } from "../inputs/CalendarEventUpdateWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateWithWhereUniqueWithoutHabitInput", { isAbstract: true })
export class CalendarEventUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateWithoutHabitInput, { nullable: false })
  data!: CalendarEventUpdateWithoutHabitInput;
}
