import * as TypeGraphQL from "type-graphql";
import { CalendarCreateWithoutEventsInput } from "../inputs/CalendarCreateWithoutEventsInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutEventsInput", {
  isAbstract: true,
})
export class CalendarCreateOrConnectWithoutEventsInput {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, {
    nullable: false,
  })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarCreateWithoutEventsInput, {
    nullable: false,
  })
  create!: CalendarCreateWithoutEventsInput;
}
