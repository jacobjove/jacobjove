import * as TypeGraphQL from "type-graphql";
import { CalendarEventScalarWhereInput } from "../inputs/CalendarEventScalarWhereInput";
import { CalendarEventUpdateManyMutationInput } from "../inputs/CalendarEventUpdateManyMutationInput";

@TypeGraphQL.InputType("CalendarEventUpdateManyWithWhereWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventUpdateManyWithWhereWithoutScheduleInput {
  @TypeGraphQL.Field((_type) => CalendarEventScalarWhereInput, {
    nullable: false,
  })
  where!: CalendarEventScalarWhereInput;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CalendarEventUpdateManyMutationInput;
}
