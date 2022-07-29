import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateManyHabitInputEnvelope } from "../inputs/GoalCreateManyHabitInputEnvelope";
import { GoalCreateOrConnectWithoutHabitInput } from "../inputs/GoalCreateOrConnectWithoutHabitInput";
import { GoalCreateWithoutHabitInput } from "../inputs/GoalCreateWithoutHabitInput";
import { GoalScalarWhereInput } from "../inputs/GoalScalarWhereInput";
import { GoalUpdateManyWithWhereWithoutHabitInput } from "../inputs/GoalUpdateManyWithWhereWithoutHabitInput";
import { GoalUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/GoalUpdateWithWhereUniqueWithoutHabitInput";
import { GoalUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/GoalUpsertWithWhereUniqueWithoutHabitInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateManyWithoutHabitInput", {
  isAbstract: true,
})
export class GoalUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [GoalCreateWithoutHabitInput], { nullable: true })
  create?: GoalCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalUpsertWithWhereUniqueWithoutHabitInput], { nullable: true })
  upsert?: GoalUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: GoalCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  set?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  disconnect?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  delete?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  connect?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalUpdateWithWhereUniqueWithoutHabitInput], { nullable: true })
  update?: GoalUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalUpdateManyWithWhereWithoutHabitInput], { nullable: true })
  updateMany?: GoalUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalScalarWhereInput], { nullable: true })
  deleteMany?: GoalScalarWhereInput[] | undefined;
}
