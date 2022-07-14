import * as TypeGraphQL from "type-graphql";
import { HabitCreateOrConnectWithoutCalendarEventsInput } from "../inputs/HabitCreateOrConnectWithoutCalendarEventsInput";
import { HabitCreateWithoutCalendarEventsInput } from "../inputs/HabitCreateWithoutCalendarEventsInput";
import { HabitUpdateWithoutCalendarEventsInput } from "../inputs/HabitUpdateWithoutCalendarEventsInput";
import { HabitUpsertWithoutCalendarEventsInput } from "../inputs/HabitUpsertWithoutCalendarEventsInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class HabitUpdateOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => HabitCreateWithoutCalendarEventsInput, {
    nullable: true,
  })
  create?: HabitCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: HabitCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpsertWithoutCalendarEventsInput, {
    nullable: true,
  })
  upsert?: HabitUpsertWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => HabitWhereUniqueInput, {
    nullable: true,
  })
  connect?: HabitWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateWithoutCalendarEventsInput, {
    nullable: true,
  })
  update?: HabitUpdateWithoutCalendarEventsInput | undefined;
}
