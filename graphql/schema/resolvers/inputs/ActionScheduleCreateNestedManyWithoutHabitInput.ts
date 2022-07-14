import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateManyHabitInputEnvelope } from "../inputs/ActionScheduleCreateManyHabitInputEnvelope";
import { ActionScheduleCreateOrConnectWithoutHabitInput } from "../inputs/ActionScheduleCreateOrConnectWithoutHabitInput";
import { ActionScheduleCreateWithoutHabitInput } from "../inputs/ActionScheduleCreateWithoutHabitInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field((_type) => [ActionScheduleCreateWithoutHabitInput], {
    nullable: true,
  })
  create?: ActionScheduleCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleCreateOrConnectWithoutHabitInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateManyHabitInputEnvelope, {
    nullable: true,
  })
  createMany?: ActionScheduleCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActionScheduleWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActionScheduleWhereUniqueInput[] | undefined;
}
