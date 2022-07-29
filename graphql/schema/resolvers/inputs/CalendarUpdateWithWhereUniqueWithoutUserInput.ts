import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarUpdateWithoutUserInput } from "../inputs/CalendarUpdateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class CalendarUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarUpdateWithoutUserInput, { nullable: false })
  data!: CalendarUpdateWithoutUserInput;
}
