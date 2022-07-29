import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutEventsInput } from "../inputs/CalendarCreateWithoutEventsInput";
import { CalendarUpdateWithoutEventsInput } from "../inputs/CalendarUpdateWithoutEventsInput";

@TypeGraphQL.InputType("CalendarUpsertWithoutEventsInput", {
  isAbstract: true,
})
export class CalendarUpsertWithoutEventsInput {
  @TypeGraphQL.Field(() => CalendarUpdateWithoutEventsInput, { nullable: false })
  update!: CalendarUpdateWithoutEventsInput;

  @TypeGraphQL.Field(() => CalendarCreateWithoutEventsInput, { nullable: false })
  create!: CalendarCreateWithoutEventsInput;
}
