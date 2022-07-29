import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateManyHabitInputEnvelope } from "../inputs/ActionScheduleCreateManyHabitInputEnvelope";
import { ActionScheduleCreateOrConnectWithoutHabitInput } from "../inputs/ActionScheduleCreateOrConnectWithoutHabitInput";
import { ActionScheduleCreateWithoutHabitInput } from "../inputs/ActionScheduleCreateWithoutHabitInput";
import { ActionScheduleScalarWhereInput } from "../inputs/ActionScheduleScalarWhereInput";
import { ActionScheduleUpdateManyWithWhereWithoutHabitInput } from "../inputs/ActionScheduleUpdateManyWithWhereWithoutHabitInput";
import { ActionScheduleUpdateWithWhereUniqueWithoutHabitInput } from "../inputs/ActionScheduleUpdateWithWhereUniqueWithoutHabitInput";
import { ActionScheduleUpsertWithWhereUniqueWithoutHabitInput } from "../inputs/ActionScheduleUpsertWithWhereUniqueWithoutHabitInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpdateManyWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleCreateWithoutHabitInput], { nullable: true })
  create?: ActionScheduleCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleCreateOrConnectWithoutHabitInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleUpsertWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  upsert?: ActionScheduleUpsertWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: ActionScheduleCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], { nullable: true })
  set?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], { nullable: true })
  disconnect?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], { nullable: true })
  delete?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleUpdateWithWhereUniqueWithoutHabitInput], {
    nullable: true,
  })
  update?: ActionScheduleUpdateWithWhereUniqueWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleUpdateManyWithWhereWithoutHabitInput], {
    nullable: true,
  })
  updateMany?: ActionScheduleUpdateManyWithWhereWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleScalarWhereInput], { nullable: true })
  deleteMany?: ActionScheduleScalarWhereInput[] | undefined;
}
