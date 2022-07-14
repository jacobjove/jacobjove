import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyHabitInputEnvelope } from "../inputs/CalendarEventCreateManyHabitInputEnvelope";
import { CalendarEventCreateOrConnectWithoutHabitInput } from "../inputs/CalendarEventCreateOrConnectWithoutHabitInput";
import { CalendarEventCreateWithoutHabitInput } from "../inputs/CalendarEventCreateWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class CalendarEventCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutHabitInput], {
    nullable: true,
  })
  create?: CalendarEventCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutHabitInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyHabitInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarEventCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
