import * as TypeGraphQL from "type-graphql";
import { RoutineHabitCreateManyHabitInputEnvelope } from "../inputs/RoutineHabitCreateManyHabitInputEnvelope";
import { RoutineHabitCreateOrConnectWithoutHabitInput } from "../inputs/RoutineHabitCreateOrConnectWithoutHabitInput";
import { RoutineHabitCreateWithoutHabitInput } from "../inputs/RoutineHabitCreateWithoutHabitInput";
import { RoutineHabitScalarWhereInput } from "../inputs/RoutineHabitScalarWhereInput";
import { RoutineHabitUpdateManyWithWhereWithoutHabitInput } from "../inputs/RoutineHabitUpdateManyWithWhereWithoutHabitInput";
import { RoutineHabitUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/RoutineHabitUpdateWithWhereUniqueWithoutHabitInput";
import { RoutineHabitUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/RoutineHabitUpsertWithWhereUniqueWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpdateManyWithoutHabitInput", {
  isAbstract: true,
})
export class RoutineHabitUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [RoutineHabitCreateWithoutHabitInput], {
    nullable: true,
  })
  create?: RoutineHabitCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitCreateOrConnectWithoutHabitInput], {
    nullable: true,
  })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitUpsertWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  upsert?: RoutineHabitUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => RoutineHabitCreateManyHabitInputEnvelope, {
    nullable: true,
  })
  createMany?: RoutineHabitCreateManyHabitInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [RoutineHabitUpdateWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  update?: RoutineHabitUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitUpdateManyWithWhereWithoutHabitInput], {
    nullable: true,
  })
  updateMany?: RoutineHabitUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [RoutineHabitScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: RoutineHabitScalarWhereInput[] | undefined;
}
