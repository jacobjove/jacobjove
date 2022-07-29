import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventScalarWhereInput } from "../inputs/CalendarEventScalarWhereInput";
import { CalendarEventUpdateManyMutationInput } from "../inputs/CalendarEventUpdateManyMutationInput";

@TypeGraphQL.InputType("CalendarEventUpdateManyWithWhereWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventUpdateManyWithWhereWithoutCalendarInput {
  @TypeGraphQL.Field(() => CalendarEventScalarWhereInput, { nullable: false })
  where!: CalendarEventScalarWhereInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyMutationInput, { nullable: false })
  data!: CalendarEventUpdateManyMutationInput;
}
