import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutEventsInput } from "../inputs/CalendarCreateWithoutEventsInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutEventsInput", { isAbstract: true })
export class CalendarCreateOrConnectWithoutEventsInput {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarCreateWithoutEventsInput, { nullable: false })
  create!: CalendarCreateWithoutEventsInput;
}
