import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarUpdateWithoutUserInput } from "../inputs/CalendarUpdateWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateWithWhereUniqueWithoutUserInput", { isAbstract: true })
export class CalendarUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarUpdateWithoutUserInput, { nullable: false })
  data!: CalendarUpdateWithoutUserInput;
}
