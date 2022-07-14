import * as TypeGraphQL from "type-graphql";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: false,
  })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field((_type) => HabitCreateWithoutCalendarEventsInput, {
    nullable: false,
  })
  create!: HabitCreateWithoutCalendarEventsInput;
}
