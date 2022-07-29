import * as TypeGraphQL from "type-graphql-v2-fork";
import { DashboardCreateManyUserInputEnvelope } from "../inputs/DashboardCreateManyUserInputEnvelope";
import { DashboardCreateOrConnectWithoutUserInput } from "../inputs/DashboardCreateOrConnectWithoutUserInput";
import { DashboardCreateWithoutUserInput } from "../inputs/DashboardCreateWithoutUserInput";
import { DashboardScalarWhereInput } from "../inputs/DashboardScalarWhereInput";
import { DashboardUpdateManyWithWhereWithoutUserInput } from "../inputs/DashboardUpdateManyWithWhereWithoutUserInput";
import { DashboardUpdateWithWhereUniqueWithoutUserInput } from "../inputs/DashboardUpdateWithWhereUniqueWithoutUserInput";
import { DashboardUpsertWithWhereUniqueWithoutUserInput } from "../inputs/DashboardUpsertWithWhereUniqueWithoutUserInput";
import { DashboardWhereUniqueInput } from "../inputs/DashboardWhereUniqueInput";

@TypeGraphQL.InputType("DashboardUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class DashboardUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [DashboardCreateWithoutUserInput], { nullable: true })
  create?: DashboardCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: DashboardCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: DashboardUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => DashboardCreateManyUserInputEnvelope, { nullable: true })
  createMany?: DashboardCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [DashboardWhereUniqueInput], { nullable: true })
  set?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardWhereUniqueInput], { nullable: true })
  disconnect?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardWhereUniqueInput], { nullable: true })
  delete?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardWhereUniqueInput], { nullable: true })
  connect?: DashboardWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: DashboardUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: DashboardUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [DashboardScalarWhereInput], { nullable: true })
  deleteMany?: DashboardScalarWhereInput[] | undefined;
}
