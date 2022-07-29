import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateOrConnectWithoutCalendarEventsInput } from "../inputs/HabitCreateOrConnectWithoutCalendarEventsInput";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitUpdateWithoutCalendarEventsInput } from "../inputs/HabitUpdateWithoutCalendarEventsInput";
import { HabitUpsertWithoutCalendarEventsInput } from "../inputs/HabitUpsertWithoutCalendarEventsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class HabitUpdateOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => HabitCreateWithoutCalendarEventsInput, { nullable: true })
  create?: HabitCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => HabitCreateOrConnectWithoutCalendarEventsInput, { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => HabitUpsertWithoutCalendarEventsInput, { nullable: true })
  upsert?: HabitUpsertWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => HabitWhereUniqueInput, { nullable: true })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateWithoutCalendarEventsInput, { nullable: true })
  update?: HabitUpdateWithoutCalendarEventsInput | undefined;
}
