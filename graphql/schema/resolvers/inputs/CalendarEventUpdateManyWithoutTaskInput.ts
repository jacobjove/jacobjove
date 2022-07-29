import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => [CalendarEventCreateWithoutTaskInput], { nullable: true })
  create?: CalendarEventCreateWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventCreateOrConnectWithoutTaskInput], { nullable: true })
  connectOrCreate?: CalendarEventCreateOrConnectWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpsertWithWhereUniqueWithoutTaskInput], {
    nullable: true,
  })
  upsert?: CalendarEventUpsertWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarEventCreateManyTaskInputEnvelope, { nullable: true })
  createMany?: CalendarEventCreateManyTaskInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  set?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  disconnect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  delete?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventWhereUniqueInput], { nullable: true })
  connect?: CalendarEventWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpdateWithWhereUniqueWithoutTaskInput], {
    nullable: true,
  })
  update?: CalendarEventUpdateWithWhereUniqueWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventUpdateManyWithWhereWithoutTaskInput], {
    nullable: true,
  })
  updateMany?: CalendarEventUpdateManyWithWhereWithoutTaskInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarEventScalarWhereInput], { nullable: true })
  deleteMany?: CalendarEventScalarWhereInput[] | undefined;
}
