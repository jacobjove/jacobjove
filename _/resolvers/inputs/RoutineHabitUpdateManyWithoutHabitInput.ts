import * as TypeGraphQL from "type-graphql-v2-fork";
import { RoutineHabitCreateManyHabitInputEnvelope } from "../inputs/RoutineHabitCreateManyHabitInputEnvelope";
import { RoutineHabitCreateOrConnectWithoutHabitInput } from "../inputs/RoutineHabitCreateOrConnectWithoutHabitInput";
import { RoutineHabitCreateWithoutHabitInput } from "../inputs/RoutineHabitCreateWithoutHabitInput";
import { RoutineHabitScalarWhereInput } from "../inputs/RoutineHabitScalarWhereInput";
import { RoutineHabitUpdateManyWithWhereWithoutHabitInput } from "../inputs/RoutineHabitUpdateManyWithWhereWithoutHabitInput";
import { RoutineHabitUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/RoutineHabitUpdateWithWhereUniqueWithoutHabitInput";
import { RoutineHabitUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/RoutineHabitUpsertWithWhereUniqueWithoutHabitInput";
import { RoutineHabitWhereUniqueInput } from "../inputs/RoutineHabitWhereUniqueInput";

@TypeGraphQL.InputType("RoutineHabitUpdateManyWithoutHabitInput", { isAbstract: true })
export class RoutineHabitUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [RoutineHabitCreateWithoutHabitInput], { nullable: true })
  create?: RoutineHabitCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: RoutineHabitCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitUpsertWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  upsert?: RoutineHabitUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => RoutineHabitCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: RoutineHabitCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  set?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  disconnect?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  delete?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitWhereUniqueInput], { nullable: true })
  connect?: RoutineHabitWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitUpdateWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  update?: RoutineHabitUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitUpdateManyWithWhereWithoutHabitInput], {
    nullable: true,
  })
  updateMany?: RoutineHabitUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [RoutineHabitScalarWhereInput], { nullable: true })
  deleteMany?: RoutineHabitScalarWhereInput[] | undefined;
}
