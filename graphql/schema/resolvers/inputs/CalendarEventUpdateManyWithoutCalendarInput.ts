import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyCalendarInputEnvelope } from "../inputs/CalendarEventCreateManyCalendarInputEnvelope";
import { CalendarEventCreateOrConnectWithoutCalendarInput } from "../inputs/CalendarEventCreateOrConnectWithoutCalendarInput";
import { CalendarEventCreateWithoutCalendarInput } from "../inputs/CalendarEventCreateWithoutCalendarInput";
import { CalendarEventScalarWhereInput } from "../inputs/CalendarEventScalarWhereInput";
import { CalendarEventUpdateManyWithWhereWithoutCalendarInput } from "../inputs/CalendarEventUpdateManyWithWhereWithoutCalendarInput";
import { CalendarEventUpdateWithWhereUniqueWithoutCalendarInput } from "../inputs/CalendarEventUpdateWithWhereUniqueWithoutCalendarInput";
import { CalendarEventUpsertWithWhereUniqueWithoutCalendarInput } from "../inputs/CalendarEventUpsertWithWhereUniqueWithoutCalendarInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateManyWithoutCalendarInput", {
  isAbstract: true,
})
export class CalendarEventUpdateManyWithoutCalendarInput {
  @TypeGraphQL.Field(() => [CalendarEventCreateWithoutCalendarInput], { nullable: true })
  create?: CalendarEventCreateWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventCreateOrConnectWithoutCalendarInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpsertWithWhereUniqueWithoutCalendarInput], {
    nullable: true,
  })
  upsert?: CalendarEventUpsertWithWhereUniqueWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateManyCalendarInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyCalendarInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  set?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  disconnect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  delete?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpdateWithWhereUniqueWithoutCalendarInput], {
    nullable: true,
  })
  update?: CalendarEventUpdateWithWhereUniqueWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpdateManyWithWhereWithoutCalendarInput], {
    nullable: true,
  })
  updateMany?: CalendarEventUpdateManyWithWhereWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventScalarWhereInput], { nullable: true })
  deleteMany?: CalendarEventScalarWhereInput[] | undefined;
}
