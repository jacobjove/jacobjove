import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateOrConnectWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class ActionScheduleCreateOrConnectWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutCalendarEventsInput, {
    nullable: false,
  })
  create!: ActionScheduleCreateWithoutCalendarEventsInput;
}
