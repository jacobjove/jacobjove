import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarUpdateWithoutAccountInput } from "../inputs/CalendarUpdateWithoutAccountInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateWithWhereUniqueWithoutAccountInput", { isAbstract: true })
export class CalendarUpdateWithWhereUniqueWithoutAccountInput {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarUpdateWithoutAccountInput, { nullable: false })
  data!: CalendarUpdateWithoutAccountInput;
}
