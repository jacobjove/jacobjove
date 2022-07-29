import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => [CalendarCreateWithoutAccountInput], { nullable: true })
  create?: CalendarCreateWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarCreateOrConnectWithoutAccountInput], { nullable: true })
  connectOrCreate?: CalendarCreateOrConnectWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarUpsertWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  upsert?: CalendarUpsertWithWhereUniqueWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field(() => CalendarCreateManyAccountInputEnvelope, { nullable: true })
  createMany?: CalendarCreateManyAccountInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  set?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  disconnect?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  delete?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarWhereUniqueInput], { nullable: true })
  connect?: CalendarWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarUpdateWithWhereUniqueWithoutAccountInput], {
    nullable: true,
  })
  update?: CalendarUpdateWithWhereUniqueWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarUpdateManyWithWhereWithoutAccountInput], {
    nullable: true,
  })
  updateMany?: CalendarUpdateManyWithWhereWithoutAccountInput[] | undefined;

  @TypeGraphQL.Field(() => [CalendarScalarWhereInput], { nullable: true })
  deleteMany?: CalendarScalarWhereInput[] | undefined;
}
