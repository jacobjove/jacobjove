import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [RoutineHabitCreateWithoutRoutineInput], {
    nullable: true,
  })
  create?: RoutineHabitCreateWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitCreateOrConnectWithoutRoutineInput], {
    nullable: true,
  })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput], {
    nullable: true,
  })
  upsert?: RoutineHabitUpsertWithWhereUniqueWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateManyRoutineInputEnvelope, {
    nullable: true,
  })
  createMany?: RoutineHabitCreateManyRoutineInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereUniqueInput], {
    nullable: true,
  })
  set?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereUniqueInput], {
    nullable: true,
  })
  delete?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitWhereUniqueInput], {
    nullable: true,
  })
  connect?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput], {
    nullable: true,
  })
  update?: RoutineHabitUpdateWithWhereUniqueWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitUpdateManyWithWhereWithoutRoutineInput], {
    nullable: true,
  })
  updateMany?: RoutineHabitUpdateManyWithWhereWithoutRoutineInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: RoutineHabitScalarWhereInput[] | undefined;
}
