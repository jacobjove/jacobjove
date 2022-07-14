import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleUpdateWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpdateWithoutCalendarEventsInput";

@TypeGraphQL.InputType("ActionScheduleUpsertWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class ActionScheduleUpsertWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => ActionScheduleUpdateWithoutCalendarEventsInput, {
    nullable: false,
  })
  update!: ActionScheduleUpdateWithoutCalendarEventsInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutCalendarEventsInput, {
    nullable: false,
  })
  create!: ActionScheduleCreateWithoutCalendarEventsInput;
}
