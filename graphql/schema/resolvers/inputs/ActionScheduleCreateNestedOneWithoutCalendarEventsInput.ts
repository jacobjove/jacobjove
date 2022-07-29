import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateOrConnectWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateOrConnectWithoutCalendarEventsInput";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateNestedOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class ActionScheduleCreateNestedOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => ActionScheduleCreateWithoutCalendarEventsInput, { nullable: true })
  create?: ActionScheduleCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: true })
  connect?: ActionScheduleWhereUniqueInput | undefined;
}
