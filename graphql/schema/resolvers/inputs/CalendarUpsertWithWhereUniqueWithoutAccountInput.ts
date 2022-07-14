import * as TypeGraphQL from "type-graphql";
import { CalendarCreateWithoutAccountInput } from "../inputs/CalendarCreateWithoutAccountInput";
import { CalendarUpdateWithoutAccountInput } from "../inputs/CalendarUpdateWithoutAccountInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpsertWithWhereUniqueWithoutAccountInput", {
  isAbstract: true,
})
export class CalendarUpsertWithWhereUniqueWithoutAccountInput {
  @TypeGraphQL.Field((_type) => CalendarWhereUniqueInput, {
    nullable: false,
  })
  where!: CalendarWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarUpdateWithoutAccountInput, {
    nullable: false,
  })
  update!: CalendarUpdateWithoutAccountInput;

  @TypeGraphQL.Field((_type) => CalendarCreateWithoutAccountInput, {
    nullable: false,
  })
  create!: CalendarCreateWithoutAccountInput;
}
