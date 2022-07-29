import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyScheduleInputEnvelope } from "../inputs/CalendarEventCreateManyScheduleInputEnvelope";
import { CalendarEventCreateOrConnectWithoutScheduleInput } from "../inputs/CalendarEventCreateOrConnectWithoutScheduleInput";
import { CalendarEventCreateWithoutScheduleInput } from "../inputs/CalendarEventCreateWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventCreateNestedManyWithoutScheduleInput {
  @TypeGraphQL.Field(() => [CalendarEventCreateWithoutScheduleInput], { nullable: true })
  create?: CalendarEventCreateWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateManyScheduleInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyScheduleInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
