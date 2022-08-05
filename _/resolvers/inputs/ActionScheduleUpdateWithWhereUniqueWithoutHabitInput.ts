import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateWithoutHabitInput } from "../inputs/ActionScheduleUpdateWithoutHabitInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleUpdateWithWhereUniqueWithoutHabitInput", { isAbstract: true })
export class ActionScheduleUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionScheduleUpdateWithoutHabitInput, { nullable: false })
  data!: ActionScheduleUpdateWithoutHabitInput;
}
