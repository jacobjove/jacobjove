import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateOrConnectWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class HabitCreateOrConnectWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: false })
  where!: HabitWhereUniqueInput;

  @TypeGraphQL.Field(() => HabitCreateWithoutCalendarEventsInput, { nullable: false })
  create!: HabitCreateWithoutCalendarEventsInput;
}
