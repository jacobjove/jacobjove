import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutUserInput } from "../inputs/CalendarCreateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class CalendarCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarCreateWithoutUserInput, { nullable: false })
  create!: CalendarCreateWithoutUserInput;
}
