import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarCreateWithoutAccountInput } from "../inputs/CalendarCreateWithoutAccountInput";
import { CalendarUpdateWithoutAccountInput } from "../inputs/CalendarUpdateWithoutAccountInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpsertWithWhereUniqueWithoutAccountInput", {
  isAbstract: true,
})
export class CalendarUpsertWithWhereUniqueWithoutAccountInput {
  @TypeGraphQL.Field(() => CalendarWhereUniqueInput, { nullable: false })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarUpdateWithoutAccountInput, { nullable: false })
  update!: CalendarUpdateWithoutAccountInput;

  @TypeGraphQL.Field(() => CalendarCreateWithoutAccountInput, { nullable: false })
  create!: CalendarCreateWithoutAccountInput;
}
