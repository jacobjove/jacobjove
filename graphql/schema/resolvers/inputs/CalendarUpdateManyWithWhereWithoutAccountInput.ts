import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarScalarWhereInput } from "../inputs/CalendarScalarWhereInput";
import { CalendarUpdateManyMutationInput } from "../inputs/CalendarUpdateManyMutationInput";

@TypeGraphQL.InputType("CalendarUpdateManyWithWhereWithoutAccountInput", {
  isAbstract: true,
})
export class CalendarUpdateManyWithWhereWithoutAccountInput {
  @TypeGraphQL.Field((_type) => CalendarScalarWhereInput, { nullable: false })
  where!: CalendarScalarWhereInput;

  @TypeGraphQL.Field((_type) => CalendarUpdateManyMutationInput, { nullable: false })
  data!: CalendarUpdateManyMutationInput;
}
