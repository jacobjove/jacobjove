import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateOrConnectWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateOrConnectWithoutCalendarEventsInput";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateNestedOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class ActionScheduleCreateNestedOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutCalendarEventsInput, {
    nullable: true,
  })
  create?: ActionScheduleCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, {
    nullable: true,
  })
  connect?: ActionScheduleWhereUniqueInput | undefined;
}
