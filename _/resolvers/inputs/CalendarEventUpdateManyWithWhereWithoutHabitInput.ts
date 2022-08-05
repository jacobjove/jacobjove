import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventScalarWhereInput } from "../inputs/CalendarEventScalarWhereInput";
import { CalendarEventUpdateManyMutationInput } from "../inputs/CalendarEventUpdateManyMutationInput";

@TypeGraphQL.InputType("CalendarEventUpdateManyWithWhereWithoutHabitInput", { isAbstract: true })
export class CalendarEventUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field(() => CalendarEventScalarWhereInput, { nullable: false })
  where!: CalendarEventScalarWhereInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyMutationInput, { nullable: false })
  data!: CalendarEventUpdateManyMutationInput;
}
