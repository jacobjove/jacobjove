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
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutCalendarInput], { nullable: true })
  create?: CalendarEventCreateWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutCalendarInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpsertWithWhereUniqueWithoutCalendarInput], {
    nullable: true,
  })
  upsert?: CalendarEventUpsertWithWhereUniqueWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyCalendarInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyCalendarInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  set?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  disconnect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  delete?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateWithWhereUniqueWithoutCalendarInput], {
    nullable: true,
  })
  update?: CalendarEventUpdateWithWhereUniqueWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateManyWithWhereWithoutCalendarInput], {
    nullable: true,
  })
  updateMany?: CalendarEventUpdateManyWithWhereWithoutCalendarInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventScalarWhereInput], { nullable: true })
  deleteMany?: CalendarEventScalarWhereInput[] | undefined;
}
