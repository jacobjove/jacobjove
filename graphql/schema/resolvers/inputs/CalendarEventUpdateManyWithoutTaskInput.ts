import * as TypeGraphQL from "type-graphql";
import { CalendarEventCreateManyTaskInputEnvelope } from "../inputs/CalendarEventCreateManyTaskInputEnvelope";
import { CalendarEventCreateOrConnectWithoutTaskInput } from "../inputs/CalendarEventCreateOrConnectWithoutTaskInput";
import { CalendarEventCreateWithoutTaskInput } from "../inputs/CalendarEventCreateWithoutTaskInput";
import { CalendarEventScalarWhereInput } from "../inputs/CalendarEventScalarWhereInput";
import { CalendarEventUpdateManyWithWhereWithoutTaskInput } from "../inputs/CalendarEventUpdateManyWithWhereWithoutTaskInput";
import { CalendarEventUpdateWithWhereUniqueWithoutTaskInput } from "../inputs/CalendarEventUpdateWithWhereUniqueWithoutTaskInput";
import { CalendarEventUpsertWithWhereUniqueWithoutTaskInput } from "../inputs/CalendarEventUpsertWithWhereUniqueWithoutTaskInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateManyWithoutTaskInput", {
  isAbstract: true,
})
export class CalendarEventUpdateManyWithoutTaskInput {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutTaskInput], {
    nullable: true,
  })
  create?: CalendarEventCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutTaskInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true,
  })
  upsert?: CalendarEventUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyTaskInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarEventCreateManyTaskInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true,
  })
  update?: CalendarEventUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateManyWithWhereWithoutTaskInput], {
    nullable: true,
  })
  updateMany?: CalendarEventUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CalendarEventScalarWhereInput[] | undefined;
}
