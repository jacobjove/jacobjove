import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyScheduleInputEnvelope } from "../inputs/CalendarEventCreateManyScheduleInputEnvelope";
import { CalendarEventCreateOrConnectWithoutScheduleInput } from "../inputs/CalendarEventCreateOrConnectWithoutScheduleInput";
import { CalendarEventCreateWithoutScheduleInput } from "../inputs/CalendarEventCreateWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventCreateNestedManyWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventCreateNestedManyWithoutScheduleInput {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutScheduleInput], {
    nullable: true,
  })
  create?: CalendarEventCreateWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyScheduleInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarEventCreateManyScheduleInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarEventWhereUniqueInput[] | undefined;
}
