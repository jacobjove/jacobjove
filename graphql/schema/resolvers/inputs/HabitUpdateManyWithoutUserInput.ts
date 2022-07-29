import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyUserInputEnvelope } from "../inputs/HabitCreateManyUserInputEnvelope";
import { HabitCreateOrConnectWithoutUserInput } from "../inputs/HabitCreateOrConnectWithoutUserInput";
import { HabitCreateWithoutUserInput } from "../inputs/HabitCreateWithoutUserInput";
import { HabitScalarWhereInput } from "../inputs/HabitScalarWhereInput";
import { HabitUpdateManyWithWhereWithoutUserInput } from "../inputs/HabitUpdateManyWithWhereWithoutUserInput";
import { HabitUpdateWithWhereUniqueWithoutUserInput } from "../inputs/HabitUpdateWithWhereUniqueWithoutUserInput";
import { HabitUpsertWithWhereUniqueWithoutUserInput } from "../inputs/HabitUpsertWithWhereUniqueWithoutUserInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateManyWithoutUserInput", {
  isAbstract: true,
})
export class HabitUpdateManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [HabitCreateWithoutUserInput], { nullable: true })
  create?: HabitCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: HabitUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateManyUserInputEnvelope, { nullable: true })
  createMany?: HabitCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  set?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  disconnect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  delete?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  connect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: HabitUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: HabitUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitScalarWhereInput], { nullable: true })
  deleteMany?: HabitScalarWhereInput[] | undefined;
}
