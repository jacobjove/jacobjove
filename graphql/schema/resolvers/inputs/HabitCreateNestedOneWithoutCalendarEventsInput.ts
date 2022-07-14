import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutCalendarEventsInput } from "../inputs/HabitCreateOrConnectWithoutCalendarEventsInput";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class HabitCreateNestedOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutCalendarEventsInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;
}
