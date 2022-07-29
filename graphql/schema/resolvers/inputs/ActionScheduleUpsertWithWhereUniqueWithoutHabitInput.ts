import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateWithoutHabitInput } from "../inputs/ActionScheduleCreateWithoutHabitInput";
import { ActionScheduleUpdateWithoutHabitInput } from "../inputs/ActionScheduleUpdateWithoutHabitInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleUpdateWithoutHabitInput, { nullable: false })
  update!: ActionScheduleUpdateWithoutHabitInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateWithoutHabitInput, { nullable: false })
  create!: ActionScheduleCreateWithoutHabitInput;
}
