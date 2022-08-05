import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateManyUserInputEnvelope } from "../inputs/DashboardCreateManyUserInputEnvelope";
import { DashboardCreateOrConnectWithoutUserInput } from "../inputs/DashboardCreateOrConnectWithoutUserInput";
import { DashboardCreateWithoutUserInput } from "../inputs/DashboardCreateWithoutUserInput";
import { DashboardScalarWhereInput } from "../inputs/DashboardScalarWhereInput";
import { DashboardUpdateManyWithWhereWithoutUserInput } from "../inputs/DashboardUpdateManyWithWhereWithoutUserInput";
import { DashboardUpdateWithWhereUniqueWithoutUserInput } from "../inputs/DashboardUpdateWithWhereUniqueWithoutUserInput";
import { DashboardUpsertWithWhereUniqueWithoutUserInput } from "../inputs/DashboardUpsertWithWhereUniqueWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardUpdateManyWithoutUserInput", { isAbstract: true })
export class DashboardUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [DashboardCreateWithoutUserInput], { nullable: true })
  create?: DashboardCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: DashboardCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: DashboardUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => DashboardCreateManyUserInputEnvelope, { nullable: true })
  createMany?: DashboardCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [DashboardWhereUniqueInput], { nullable: true })
  set?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardWhereUniqueInput], { nullable: true })
  disconnect?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardWhereUniqueInput], { nullable: true })
  delete?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardWhereUniqueInput], { nullable: true })
  connect?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: DashboardUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: DashboardUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [DashboardScalarWhereInput], { nullable: true })
  deleteMany?: DashboardScalarWhereInput[] | undefined;
}
