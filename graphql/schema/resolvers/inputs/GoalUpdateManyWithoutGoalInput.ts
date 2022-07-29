import * as TypeGraphQL from "type-graphql-v2-fork";
import { GoalCreateManyGoalInputEnvelope } from "../inputs/GoalCreateManyGoalInputEnvelope";
import { GoalCreateOrConnectWithoutGoalInput } from "../inputs/GoalCreateOrConnectWithoutGoalInput";
import { GoalCreateWithoutGoalInput } from "../inputs/GoalCreateWithoutGoalInput";
import { GoalScalarWhereInput } from "../inputs/GoalScalarWhereInput";
import { GoalUpdateManyWithWhereWithoutGoalInput } from "../inputs/GoalUpdateManyWithWhereWithoutGoalInput";
import { GoalUpdateWithWhereUniqueWithoutGoalInput } from "../inputs/GoalUpdateWithWhereUniqueWithoutGoalInput";
import { GoalUpsertWithWhereUniqueWithoutGoalInput } from "../inputs/GoalUpsertWithWhereUniqueWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpdateManyWithoutGoalInput", {
  isAbstract: true,
})
export class GoalUpdateManyWithoutGoalInput {
  @TypeGraphQL.Field((_type) => [GoalCreateWithoutGoalInput], { nullable: true })
  create?: GoalCreateWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalCreateOrConnectWithoutGoalInput], { nullable: true })
  connectOrCreate?: GoalCreateOrConnectWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalUpsertWithWhereUniqueWithoutGoalInput], { nullable: true })
  upsert?: GoalUpsertWithWhereUniqueWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field((_type) => GoalCreateManyGoalInputEnvelope, { nullable: true })
  createMany?: GoalCreateManyGoalInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  set?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  disconnect?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  delete?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalWhereUniqueInput], { nullable: true })
  connect?: GoalWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalUpdateWithWhereUniqueWithoutGoalInput], { nullable: true })
  update?: GoalUpdateWithWhereUniqueWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalUpdateManyWithWhereWithoutGoalInput], { nullable: true })
  updateMany?: GoalUpdateManyWithWhereWithoutGoalInput[] | undefined;

  @TypeGraphQL.Field((_type) => [GoalScalarWhereInput], { nullable: true })
  deleteMany?: GoalScalarWhereInput[] | undefined;
}
