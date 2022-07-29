import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutUserInput } from "../inputs/CalendarCreateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutUserInput", {
  isAbstract: true,
})
export class CalendarCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarCreateWithoutUserInput, { nullable: false })
  create!: CalendarCreateWithoutUserInput;
}
