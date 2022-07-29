import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyActInputEnvelope } from "../inputs/HabitCreateManyActInputEnvelope";
import { HabitCreateOrConnectWithoutActInput } from "../inputs/HabitCreateOrConnectWithoutActInput";
import { HabitCreateWithoutActInput } from "../inputs/HabitCreateWithoutActInput";
import { HabitScalarWhereInput } from "../inputs/HabitScalarWhereInput";
import { HabitUpdateManyWithWhereWithoutActInput } from "../inputs/HabitUpdateManyWithWhereWithoutActInput";
import { HabitUpdateWithWhereUniqueWithoutActInput } from "../inputs/HabitUpdateWithWhereUniqueWithoutActInput";
import { HabitUpsertWithWhereUniqueWithoutActInput } from "../inputs/HabitUpsertWithWhereUniqueWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateManyWithoutActInput", {
  isAbstract: true,
})
export class HabitUpdateManyWithoutActInput {
  @TypeGraphQL.Field((_type) => [HabitCreateWithoutActInput], { nullable: true })
  create?: HabitCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitCreateOrConnectWithoutActInput], { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitUpsertWithWhereUniqueWithoutActInput], { nullable: true })
  upsert?: HabitUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => HabitCreateManyActInputEnvelope, { nullable: true })
  createMany?: HabitCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  set?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  disconnect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  delete?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitWhereUniqueInput], { nullable: true })
  connect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitUpdateWithWhereUniqueWithoutActInput], { nullable: true })
  update?: HabitUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitUpdateManyWithWhereWithoutActInput], { nullable: true })
  updateMany?: HabitUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field((_type) => [HabitScalarWhereInput], { nullable: true })
  deleteMany?: HabitScalarWhereInput[] | undefined;
}
