import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutCalendarEventsInput } from "../inputs/HabitCreateOrConnectWithoutCalendarEventsInput";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitCreateNestedOneWithoutCalendarEventsInput", { isAbstract: true })
export class HabitCreateNestedOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutCalendarEventsInput, { nullable: true })
  create?: HabitCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutCalendarEventsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;
}
