import * as TypeGraphQL from "type-graphql";
import { CalendarCreateWithoutEventsInput } from "../inputs/CalendarCreateWithoutEventsInput";
import { CalendarUpdateWithoutEventsInput } from "../inputs/CalendarUpdateWithoutEventsInput";

@TypeGraphQL.InputType("CalendarUpsertWithoutEventsInput", {
  isAbstract: true,
})
export class CalendarUpsertWithoutEventsInput {
  @TypeGraphQL.Field((_type) => CalendarUpdateWithoutEventsInput, {
    nullable: false,
  })
  update!: CalendarUpdateWithoutEventsInput;

  @TypeGraphQL.Field((_type) => CalendarCreateWithoutEventsInput, {
    nullable: false,
  })
  create!: CalendarCreateWithoutEventsInput;
}
