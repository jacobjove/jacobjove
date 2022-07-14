import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateWithoutTaskInput } from "../inputs/CalendarEventCreateWithoutTaskInput";
import { CalendarEventUpdateWithoutTaskInput } from "../inputs/CalendarEventUpdateWithoutTaskInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true,
})
export class CalendarEventUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field((_type) => CalendarEventWhereUniqueInput, {
    nullable: false,
  })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateWithoutTaskInput, {
    nullable: false,
  })
  update!: CalendarEventUpdateWithoutTaskInput;

  @TypeGraphQL.Field((_type) => CalendarEventCreateWithoutTaskInput, {
    nullable: false,
  })
  create!: CalendarEventCreateWithoutTaskInput;
}
