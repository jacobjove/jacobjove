import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyRoutineInputEnvelope } from "../inputs/RoutineHabitCreateManyRoutineInputEnvelope";
import { RoutineHabitCreateOrConnectWithoutRoutineInput } from "../inputs/RoutineHabitCreateOrConnectWithoutRoutineInput";
import { RoutineHabitCreateWithoutRoutineInput } from "../inputs/RoutineHabitCreateWithoutRoutineInput";
import { RoutineHabitScalarWhereInput } from "../inputs/RoutineHabitScalarWhereInput";
import { RoutineHabitUpdateManyWithWhereWithoutRoutineInput } from "../inputs/RoutineHabitUpdateManyWithWhereWithoutRoutineInput";
import { RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput } from "../inputs/RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput";
import { RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput } from "../inputs/RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpdateManyWithoutRoutineInput", {
  isAbstract: true,
})
export class RoutineHabitUpdateManyWithoutRoutineInput {
  @TypeGraphQL.Field(() => [RoutineHabitCreateWithoutRoutineInput], { nullable: true })
  create?: RoutineHabitCreateWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitCreateOrConnectWithoutRoutineInput], {
    nullable: true,
  })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput], {
    nullable: true,
  })
  upsert?: RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field(() => RoutineHabitCreateManyRoutineInputEnvelope, { nullable: true })
  createMany?: RoutineHabitCreateManyRoutineInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  set?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  disconnect?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  delete?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  connect?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput], {
    nullable: true,
  })
  update?: RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitUpdateManyWithWhereWithoutRoutineInput], {
    nullable: true,
  })
  updateMany?: RoutineHabitUpdateManyWithWhereWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereInput], { nullable: true })
  deleteMany?: RoutineHabitScalarWhereInput[] | undefined;
}
