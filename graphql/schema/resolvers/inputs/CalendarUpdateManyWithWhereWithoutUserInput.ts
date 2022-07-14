import * as TypeGraphQL from "type-graphql";
import { CalendarScalarWhereInput } from "../inputs/CalendarScalarWhereInput";
import { CalendarUpdateManyMutationInput } from "../inputs/CalendarUpdateManyMutationInput";

@TypeGraphQL.InputType("CalendarUpdateManyWithWhereWithoutUserInput", {
  isAbstract: true,
})
export class CalendarUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => CalendarScalarWhereInput, {
    nullable: false,
  })
  where!: CalendarScalarWhereInput;

  @TypeGraphQL.Field((_type) => CalendarUpdateManyMutationInput, {
    nullable: false,
  })
  data!: CalendarUpdateManyMutationInput;
}
