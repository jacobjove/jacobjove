import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarScalarWhereInput } from "../inputs/CalendarScalarWhereInput";
import { CalendarUpdateManyMutationInput } from "../inputs/CalendarUpdateManyMutationInput";

@TypeGraphQL.InputType("CalendarUpdateManyWithWhereWithoutAccountInput", {
  isAbstract: true,
})
export class CalendarUpdateManyWithWhereWithoutAccountInput {
  @TypeGraphQL.Field(() => CalendarScalarWhereInput, { nullable: false })
  where!: CalendarScalarWhereInput;

  @TypeGraphQL.Field(() => CalendarUpdateManyMutationInput, { nullable: false })
  data!: CalendarUpdateManyMutationInput;
}
