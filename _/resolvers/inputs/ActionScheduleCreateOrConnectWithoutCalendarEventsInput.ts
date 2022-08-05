import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateOrConnectWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class ActionScheduleCreateOrConnectWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateWithoutCalendarEventsInput, { nullable: false })
  create!: ActionScheduleCreateWithoutCalendarEventsInput;
}
