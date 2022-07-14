import * as TypeGraphQL from "type-graphql";
import { CalendarCreateManyAccountInputEnvelope } from "../inputs/CalendarCreateManyAccountInputEnvelope";
import { CalendarCreateOrConnectWithoutAccountInput } from "../inputs/CalendarCreateOrConnectWithoutAccountInput";
import { CalendarCreateWithoutAccountInput } from "../inputs/CalendarCreateWithoutAccountInput";
import { CalendarScalarWhereInput } from "../inputs/CalendarScalarWhereInput";
import { CalendarUpdateManyWithWhereWithoutAccountInput } from "../inputs/CalendarUpdateManyWithWhereWithoutAccountInput";
import { CalendarUpdateWithWhereUniqueWithoutAccountInput } from "../inputs/CalendarUpdateWithWhereUniqueWithoutAccountInput";
import { CalendarUpsertWithWhereUniqueWithoutAccountInput } from "../inputs/CalendarUpsertWithWhereUniqueWithoutAccountInput";
import { CalendarWhereUniqueInput } from "../inputs/CalendarWhereUniqueInput";

@TypeGraphQL.InputType("CalendarUpdateManyWithoutAccountInput", {
  isAbstract: true,
})
export class CalendarUpdateManyWithoutAccountInput {
  @TypeGraphQL.Field((_type) => [CalendarCreateWithoutAccountInput], {
    nullable: true,
  })
  create?: CalendarCreateWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarCreateOrConnectWithoutAccountInput], {
    nullable: true,
  })
  connectOrCreate?: CalendarCreateOrConnectWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarUpsertWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  upsert?: CalendarUpsertWithWhereUniqueWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field((_type) => CalendarCreateManyAccountInputEnvelope, {
    nullable: true,
  })
  createMany?: CalendarCreateManyAccountInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [CalendarUpdateWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  update?: CalendarUpdateWithWhereUniqueWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarUpdateManyWithWhereWithoutAccountInput], {
    nullable: true,
  })
  updateMany?: CalendarUpdateManyWithWhereWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CalendarScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CalendarScalarWhereInput[] | undefined;
}
