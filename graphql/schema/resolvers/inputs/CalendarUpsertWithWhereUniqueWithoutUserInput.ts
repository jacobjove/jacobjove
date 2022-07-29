import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutUserInput } from "../inputs/CalendarCreateWithoutUserInput";
import { CalendarUpdateWithoutUserInput } from "../inputs/CalendarUpdateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class CalendarUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarUpdateWithoutUserInput, { nullable: false })
  update!: CalendarUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => CalendarCreateWithoutUserInput, { nullable: false })
  create!: CalendarCreateWithoutUserInput;
}
