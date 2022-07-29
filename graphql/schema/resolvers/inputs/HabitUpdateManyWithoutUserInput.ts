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
  @TypeGraphQL.Field(() => [HabitCreateWithoutUserInput], { nullable: true })
  create?: HabitCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitCreateOrConnectWithoutUserInput], { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitUpsertWithWhereUniqueWithoutUserInput], { nullable: true })
  upsert?: HabitUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => HabitCreateManyUserInputEnvelope, { nullable: true })
  createMany?: HabitCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  set?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  disconnect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  delete?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  connect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitUpdateWithWhereUniqueWithoutUserInput], { nullable: true })
  update?: HabitUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitUpdateManyWithWhereWithoutUserInput], { nullable: true })
  updateMany?: HabitUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitScalarWhereInput], { nullable: true })
  deleteMany?: HabitScalarWhereInput[] | undefined;
}
