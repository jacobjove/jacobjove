import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateManyHabitInputEnvelope } from "../inputs/ActionScheduleCreateManyHabitInputEnvelope";
import { ActionScheduleCreateOrConnectWithoutHabitInput } from "../inputs/ActionScheduleCreateOrConnectWithoutHabitInput";
import { ActionScheduleCreateWithoutHabitInput } from "../inputs/ActionScheduleCreateWithoutHabitInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateNestedManyWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleCreateNestedManyWithoutHabitInput {
  @TypeGraphQL.Field(() => [ActionScheduleCreateWithoutHabitInput], { nullable: true })
  create?: ActionScheduleCreateWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleCreateOrConnectWithoutHabitInput], {
    nullable: true,
  })
  connectOrCreate?: ActionScheduleCreateOrConnectWithoutHabitInput[] | undefined;

  @TypeGraphQL.Field(() => ActionScheduleCreateManyHabitInputEnvelope, { nullable: true })
  createMany?: ActionScheduleCreateManyHabitInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [ActionScheduleWhereUniqueInput], { nullable: true })
  connect?: ActionScheduleWhereUniqueInput[] | undefined;
}
