import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateWithoutTaskInput } from "../inputs/CalendarEventCreateWithoutTaskInput";
import { CalendarEventUpdateWithoutTaskInput } from "../inputs/CalendarEventUpdateWithoutTaskInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpsertWithWhereUniqueWithoutTaskInput", {
  isAbstract: true,
})
export class CalendarEventUpsertWithWhereUniqueWithoutTaskInput {
  @TypeGraphQL.Field(() => CalendarEventWhereUniqueInput, { nullable: false })
  where!: CalendarEventWhereUniqueInput;

  @TypeGraphQL.Field(() => CalendarEventUpdateWithoutTaskInput, { nullable: false })
  update!: CalendarEventUpdateWithoutTaskInput;

  @TypeGraphQL.Field(() => CalendarEventCreateWithoutTaskInput, { nullable: false })
  create!: CalendarEventCreateWithoutTaskInput;
}
