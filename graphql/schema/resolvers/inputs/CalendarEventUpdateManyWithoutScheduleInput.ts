import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyScheduleInputEnvelope } from "../inputs/CalendarEventCreateManyScheduleInputEnvelope";
import { CalendarEventCreateOrConnectWithoutScheduleInput } from "../inputs/CalendarEventCreateOrConnectWithoutScheduleInput";
import { CalendarEventCreateWithoutScheduleInput } from "../inputs/CalendarEventCreateWithoutScheduleInput";
import { CalendarEventScalarWhereInput } from "../inputs/CalendarEventScalarWhereInput";
import { CalendarEventUpdateManyWithWhereWithoutScheduleInput } from "../inputs/CalendarEventUpdateManyWithWhereWithoutScheduleInput";
import { CalendarEventUpdateWithWhereUniqueWithoutScheduleInput } from "../inputs/CalendarEventUpdateWithWhereUniqueWithoutScheduleInput";
import { CalendarEventUpsertWithWhereUniqueWithoutScheduleInput } from "../inputs/CalendarEventUpsertWithWhereUniqueWithoutScheduleInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateManyWithoutScheduleInput", {
  isAbstract: true,
})
export class CalendarEventUpdateManyWithoutScheduleInput {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutScheduleInput], {
    nullable: true,
  })
  create?: CalendarEventCreateWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpsertWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  upsert?: CalendarEventUpsertWithWhereUniqueWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyScheduleInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarEventCreateManyScheduleInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  set?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  delete?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  update?: CalendarEventUpdateWithWhereUniqueWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateManyWithWhereWithoutScheduleInput], {
    nullable: true,
  })
  updateMany?: CalendarEventUpdateManyWithWhereWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CalendarEventScalarWhereInput[] | undefined;
}
