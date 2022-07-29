import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleCreateWithoutHabitInput } from "../inputs/ActionScheduleCreateWithoutHabitInput";
import { ActionScheduleWhereUniqueInput } from "../inputs/ActionScheduleWhereUniqueInput";

@TypeGraphQL.InputType("ActionScheduleCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field((_type) => ActionScheduleWhereUniqueInput, { nullable: false })
  where!: ActionScheduleWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateWithoutHabitInput, { nullable: false })
  create!: ActionScheduleCreateWithoutHabitInput;
}
