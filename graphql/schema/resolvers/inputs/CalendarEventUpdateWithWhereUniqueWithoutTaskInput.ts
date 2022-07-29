import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateWithoutTaskInput } from "../inputs/CalendarEventUpdateWithoutTaskInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateWithWhereUniqueWithoutTaskInput", {
  isAbstract: true,
})
export class CalendarEventUpdateWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateWithoutTaskInput, { nullable: false })
  data!: CalendarEventUpdateWithoutTaskInput;
}
