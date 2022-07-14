import * as TypeGraphQL from "type-graphql";
import { CalendarCreateWithoutAccountInput } from "../inputs/CalendarCreateWithoutAccountInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarCreateOrConnectWithoutAccountInput", {
  isAbstract: true,
})
export class CalendarCreateOrConnectWithoutAccountInput {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, {
    nullable: false,
  })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarCreateWithoutAccountInput, {
    nullable: false,
  })
  create!: CalendarCreateWithoutAccountInput;
}
