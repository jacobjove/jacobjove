import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutHabitInput } from "../inputs/CalendarEventCreateWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateOrConnectWithoutHabitInput", { isAbstract: true })
export class CalendarEventCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventCreateWithoutHabitInput, { nullable: false })
  create!: CalendarEventCreateWithoutHabitInput;
}
