import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateOrConnectWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateOrConnectWithoutCalendarEventsInput";
import { ActionScheduleCreateWithoutCalendarEventsInput } from "../inputs/ActionScheduleCreateWithoutCalendarEventsInput";
import { ActionScheduleUpdateWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpdateWithoutCalendarEventsInput";
import { ActionScheduleUpsertWithoutCalendarEventsInput } from "../inputs/ActionScheduleUpsertWithoutCalendarEventsInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpdateOneWithoutCalendarEventsInput", { isAbstract: true })
export class ActionScheduleUpdateOneWithoutCalendarEventsInput {
  @TypeGraphQL.Field(() => ActionScheduleCreateWithoutCalendarEventsInput, { nullable: true })
  create?: ActionScheduleCreateWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleCreateOrConnectWithoutCalendarEventsInput, {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleUpsertWithoutCalendarEventsInput, { nullable: true })
  upsert?: ActionScheduleUpsertWithoutCalendarEventsInput | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: true })
  connect?: ActionScheduleWhereUniqueInput | undefined;

  @TypeGraphQL.Field(() => ActionScheduleUpdateWithoutCalendarEventsInput, { nullable: true })
  update?: ActionScheduleUpdateWithoutCalendarEventsInput | undefined;
}
