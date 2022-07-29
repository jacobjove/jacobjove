import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleScalarWhereInput } from "../inputs/ActionScheduleScalarWhereInput";
import { ActionScheduleUpdateManyMutationInput } from "../inputs/ActionScheduleUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionScheduleUpdateManyWithWhereWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field((_type) => ActionScheduleScalarWhereInput, { nullable: false })
  where!: ActionScheduleScalarWhereInput;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateManyMutationInput, { nullable: false })
  data!: ActionScheduleUpdateManyMutationInput;
}
