import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutUserInput } from "../inputs/CalendarCreateWithoutUserInput";
import { CalendarUpdateWithoutUserInput } from "../inputs/CalendarUpdateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpsertWithWhereUniqueWithoutUserInput", {
  isAbstract: true,
})
export class CalendarUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarUpdateWithoutUserInput, { nullable: false })
  update!: CalendarUpdateWithoutUserInput;

  @TypeGraphQL.Field(() => CalendarCreateWithoutUserInput, { nullable: false })
  create!: CalendarCreateWithoutUserInput;
}
