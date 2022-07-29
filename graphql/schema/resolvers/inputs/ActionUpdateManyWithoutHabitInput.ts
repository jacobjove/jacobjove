import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateManyHabitInputEnvelope } from "../inputs/ActionCreateManyHabitInputEnvelope";
import { ActionCreateOrConnectWithoutHabitInput } from "../inputs/ActionCreateOrConnectWithoutHabitInput";
import { ActionCreateWithoutHabitInput } from "../inputs/ActionCreateWithoutHabitInput";
import { ActionScalarWhereInput } from "../inputs/ActionScalarWhereInput";
import { ActionUpdateManyWithWhereWithoutHabitInput } from "../inputs/ActionUpdateManyWithWhereWithoutHabitInput";
import { ActionUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/ActionUpdateWithWhereUniqueWithoutHabitInput";
import { ActionUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/ActionUpsertWithWhereUniqueWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpdateManyWithoutHabitInput", {
  isAbstract: true,
})
export class ActionUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [ActionCreateWithoutHabitInput], { nullable: true })
  create?: ActionCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionCreateOrConnectWithoutHabitInput], { nullable: true })
  connectOrCreate?: ActionCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionUpsertWithWhereUniqueWithoutHabitInput], { nullable: true })
  upsert?: ActionUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: ActionCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionWhereUniqueInput], { nullable: true })
  set?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionWhereUniqueInput], { nullable: true })
  disconnect?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionWhereUniqueInput], { nullable: true })
  delete?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionWhereUniqueInput], { nullable: true })
  connect?: ActionWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionUpdateWithWhereUniqueWithoutHabitInput], { nullable: true })
  update?: ActionUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionUpdateManyWithWhereWithoutHabitInput], { nullable: true })
  updateMany?: ActionUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScalarWhereInput], { nullable: true })
  deleteMany?: ActionScalarWhereInput[] | undefined;
}
