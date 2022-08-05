import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitCreateManyActInputEnvelope } from "../inputs/HabitCreateManyActInputEnvelope";
import { HabitCreateOrConnectWithoutActInput } from "../inputs/HabitCreateOrConnectWithoutActInput";
import { HabitCreateWithoutActInput } from "../inputs/HabitCreateWithoutActInput";
import { HabitScalarWhereInput } from "../inputs/HabitScalarWhereInput";
import { HabitUpdateManyWithWhereWithoutActInput } from "../inputs/HabitUpdateManyWithWhereWithoutActInput";
import { HabitUpdateWithWhereUniqueWithoutActInput } from "../inputs/HabitUpdateWithWhereUniqueWithoutActInput";
import { HabitUpsertWithWhereUniqueWithoutActInput } from "../inputs/HabitUpsertWithWhereUniqueWithoutActInput";
import { HabitWhereUniqueInput } from "../inputs/HabitWhereUniqueInput";

@TypeGraphQL.InputType("HabitUpdateManyWithoutActInput", { isAbstract: true })
export class HabitUpdateManyWithoutActInput {
  @TypeGraphQL.Field(() => [HabitCreateWithoutActInput], { nullable: true })
  create?: HabitCreateWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitCreateOrConnectWithoutActInput], { nullable: true })
  connectOrCreate?: HabitCreateOrConnectWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitUpsertWithWhereUniqueWithoutActInput], { nullable: true })
  upsert?: HabitUpsertWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => HabitCreateManyActInputEnvelope, { nullable: true })
  createMany?: HabitCreateManyActInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  set?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  disconnect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  delete?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitWhereUniqueInput], { nullable: true })
  connect?: HabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitUpdateWithWhereUniqueWithoutActInput], { nullable: true })
  update?: HabitUpdateWithWhereUniqueWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitUpdateManyWithWhereWithoutActInput], { nullable: true })
  updateMany?: HabitUpdateManyWithWhereWithoutActInput[] | undefined;

  @TypeGraphQL.Field(() => [HabitScalarWhereInput], { nullable: true })
  deleteMany?: HabitScalarWhereInput[] | undefined;
}
