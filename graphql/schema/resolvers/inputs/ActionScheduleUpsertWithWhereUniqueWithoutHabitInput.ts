import * as TypeGraphQL from "type-graphql";
import { ActionScheduleCreateWithoutHabitInput } from "../inputs/ActionScheduleCreateWithoutHabitInput";
import { ActionScheduleUpdateWithoutHabitInput } from "../inputs/ActionScheduleUpdateWithoutHabitInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateWithoutHabitInput, {
    nullable: false,
  })
  update!: ActionScheduleUpdateWithoutHabitInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutHabitInput, {
    nullable: false,
  })
  create!: ActionScheduleCreateWithoutHabitInput;
}
