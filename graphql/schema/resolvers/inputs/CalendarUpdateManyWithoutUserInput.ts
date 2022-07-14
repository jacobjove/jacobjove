import * as TypeGraphQL from "type-graphql";
import { CalendarCreateManyUserInputEnvelope } from "../inputs/CalendarCreateManyUserInputEnvelope";
import { CalendarCreateOrConnectWithoutUserInput } from "../inputs/CalendarCreateOrConnectWithoutUserInput";
import { CalendarCreateWithoutUserInput } from "../inputs/CalendarCreateWithoutUserInput";
import { CalendarScalarWhereInput } from "../inputs/CalendarScalarWhereInput";
import { CalendarUpdateManyWithWhereWithoutUserInput } from "../inputs/CalendarUpdateManyWithWhereWithoutUserInput";
import { CalendarUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CalendarUpdateWithWhereUniqueWithoutUserInput";
import { CalendarUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CalendarUpsertWithWhereUniqueWithoutUserInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class CalendarUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [CalendarCreateWithoutUserInput], {
    nullable: true,
  })
  create?: CalendarCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: CalendarUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  set?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  delete?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarWhereUniqueInput], {
    nullable: true,
  })
  connect?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: CalendarUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: CalendarUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CalendarScalarWhereInput[] | undefined;
}
