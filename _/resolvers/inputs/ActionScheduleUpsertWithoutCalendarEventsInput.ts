import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleUpdateWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpdateWithoutCalendarEventsInput";

@TypeGraphQL.InputType("ActionScheduleUpsertWithoutCalendarEventsInput", { isAbstract: true })
export class ActionScheduleUpsertWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => ActionScheduleUpdateWithoutCalendarEventsInput, { nullable: false })
  update!: ActionScheduleUpdateWithoutCalendarEventsInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateWithoutCalendarEventsInput, { nullable: false })
  create!: ActionScheduleCreateWithoutCalendarEventsInput;
}
