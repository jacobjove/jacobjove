import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => [CalendarEventCreateWithoutScheduleInput], { nullable: true })
  create?: CalendarEventCreateWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpsertWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  upsert?: CalendarEventUpsertWithWhereUniqueWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateManyScheduleInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyScheduleInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  set?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  disconnect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  delete?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpdateWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  update?: CalendarEventUpdateWithWhereUniqueWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpdateManyWithWhereWithoutScheduleInput], {
    nullable: true,
  })
  updateMany?: CalendarEventUpdateManyWithWhereWithoutScheduleInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventScalarWhereInput], { nullable: true })
  deleteMany?: CalendarEventScalarWhereInput[] | undefined;
}
