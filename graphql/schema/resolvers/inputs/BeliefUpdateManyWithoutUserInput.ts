import * as TypeGraphQL from "type-graphql";
import { BeliefCreateManyUserInputEnvelope } from "../inputs/BeliefCreateManyUserInputEnvelope";
import { BeliefCreateOrConnectWithoutUserInput } from "../inputs/BeliefCreateOrConnectWithoutUserInput";
import { BeliefCreateWithoutUserInput } from "../inputs/BeliefCreateWithoutUserInput";
import { BeliefScalarWhereInput } from "../inputs/BeliefScalarWhereInput";
import { BeliefUpdateManyWithWhereWithoutUserInput } from "../inputs/BeliefUpdateManyWithWhereWithoutUserInput";
import { BeliefUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BeliefUpdateWithWhereUniqueWithoutUserInput";
import { BeliefUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BeliefUpsertWithWhereUniqueWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class BeliefUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [BeliefCreateWithoutUserInput], {
    nullable: true,
  })
  create?: BeliefCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: BeliefCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: BeliefUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => BeliefCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: BeliefCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [BeliefWhereUniqueInput], {
    nullable: true,
  })
  set?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefWhereUniqueInput], {
    nullable: true,
  })
  delete?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefWhereUniqueInput], {
    nullable: true,
  })
  connect?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: BeliefUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: BeliefUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [BeliefScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: BeliefScalarWhereInput[] | undefined;
}
