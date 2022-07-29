import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventCreateManyHabitInputEnvelope } from "../inputs/CalendarEventCreateManyHabitInputEnvelope";
import { CalendarEventCreateOrConnectWithoutHabitInput } from "../inputs/CalendarEventCreateOrConnectWithoutHabitInput";
import { CalendarEventCreateWithoutHabitInput } from "../inputs/CalendarEventCreateWithoutHabitInput";
import { CalendarEventScalarWhereInput } from "../inputs/CalendarEventScalarWhereInput";
import { CalendarEventUpdateManyWithWhereWithoutHabitInput } from "../inputs/CalendarEventUpdateManyWithWhereWithoutHabitInput";
import { CalendarEventUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/CalendarEventUpdateWithWhereUniqueWithoutHabitInput";
import { CalendarEventUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/CalendarEventUpsertWithWhereUniqueWithoutHabitInput";
import { CalendarEventWhereUniqueInput } from "../inputs/CalendarEventWhereUniqueInput";

@TypeGraphQL.InputType("CalendarEventUpdateManyWithoutHabitInput", {
  isAbstract: true,
})
export class CalendarEventUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [CalendarEventCreateWithoutHabitInput], { nullable: true })
  create?: CalendarEventCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpsertWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  upsert?: CalendarEventUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  set?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  disconnect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  delete?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  update?: CalendarEventUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventUpdateManyWithWhereWithoutHabitInput], {
    nullable: true,
  })
  updateMany?: CalendarEventUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarEventScalarWhereInput], { nullable: true })
  deleteMany?: CalendarEventScalarWhereInput[] | undefined;
}
