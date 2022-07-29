import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateOrConnectWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateOrConnectWithoutCalendarEventsInput";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleUpdateWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpdateWithoutCalendarEventsInput";
import { ActionScheduleUpsertWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpsertWithoutCalendarEventsInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpdateOneWithoutCalendarEventsInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutCalendarEventsInput, { nullable: true })
  create?: ActionScheduleCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleUpsertWithoutCalendarEventsInput, { nullable: true })
  upsert?: ActionScheduleUpsertWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, { nullable: true })
  connect?: ActionScheduleWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateWithoutCalendarEventsInput, { nullable: true })
  update?: ActionScheduleUpdateWithoutCalendarEventsInput | undefined;
}
