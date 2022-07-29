import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => [CalendarCreateWithoutUserInput], { nullable: true })
  create?: CalendarCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: CalendarCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: CalendarUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarCreateManyUserInputEnvelope, { nullable: true })
  createMany?: CalendarCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  set?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  disconnect?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  delete?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  connect?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: CalendarUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: CalendarUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarScalarWhereInput], { nullable: true })
  deleteMany?: CalendarScalarWhereInput[] | undefined;
}
