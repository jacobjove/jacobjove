import * as TypeGraphQL from "type-graphql-v2-fork";
import { BeliefCreateManyUserInputEnvelope } from "../inputs/BeliefCreateManyUserInputEnvelope";
import { BeliefCreateOrConnectWithoutUserInput } from "../inputs/BeliefCreateOrConnectWithoutUserInput";
import { BeliefCreateWithoutUserInput } from "../inputs/BeliefCreateWithoutUserInput";
import { BeliefScalarWhereInput } from "../inputs/BeliefScalarWhereInput";
import { BeliefUpdateManyWithWhereWithoutUserInput } from "../inputs/BeliefUpdateManyWithWhereWithoutUserInput";
import { BeliefUpdateWithWhereUniqueWithoutUserInput } from "../inputs/BeliefUpdateWithWhereUniqueWithoutUserInput";
import { BeliefUpsertWithWhereUniqueWithoutUserInput } from "../inputs/BeliefUpsertWithWhereUniqueWithoutUserInput";
import { BeliefWhereUniqueInput } from "../inputs/BeliefWhereUniqueInput";

@TypeGraphQL.InputType("BeliefUpdateManyWithoutUserInput", { isAbstract: true })
export class BeliefUpdateManyWithoutUserInput {
  @TypeGraphQL.Field(() => [BeliefCreateWithoutUserInput], { nullable: true })
  create?: BeliefCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: BeliefCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: BeliefUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => BeliefCreateManyUserInputEnvelope, { nullable: true })
  createMany?: BeliefCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [BeliefWhereUniqueInput], { nullable: true })
  set?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefWhereUniqueInput], { nullable: true })
  disconnect?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefWhereUniqueInput], { nullable: true })
  delete?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefWhereUniqueInput], { nullable: true })
  connect?: BeliefWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: BeliefUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: BeliefUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [BeliefScalarWhereInput], { nullable: true })
  deleteMany?: BeliefScalarWhereInput[] | undefined;
}
