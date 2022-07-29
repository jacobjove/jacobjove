import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitUpdateWithoutCalendarEventsInput } from "../inputs/HabitUpdateWithoutCalendarEventsInput";

@TypeGraphQL.InputType("HabitUpsertWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class HabitUpsertWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => HabitUpdateWithoutCalendarEventsInput, { nullable: false })
  update!: HabitUpdateWithoutCalendarEventsInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutCalendarEventsInput, { nullable: false })
  create!: HabitCreateWithoutCalendarEventsInput;
}
