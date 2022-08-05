import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitUpdateWithoutCalendarEventsInput } from "../inputs/HabitUpdateWithoutCalendarEventsInput";

@TypeGraphQL.InputType("HabitUpsertWithoutCalendarEventsInput", { isAbstract: true })
export class HabitUpsertWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => HabitUpdateWithoutCalendarEventsInput, { nullable: false })
  update!: HabitUpdateWithoutCalendarEventsInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutCalendarEventsInput, { nullable: false })
  create!: HabitCreateWithoutCalendarEventsInput;
}
