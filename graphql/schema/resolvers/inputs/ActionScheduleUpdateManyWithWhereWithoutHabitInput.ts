import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleScalarWhereInput } from "../inputs/ActionScheduleScalarWhereInput";
import { ActionScheduleUpdateManyMutationInput } from "../inputs/ActionScheduleUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionScheduleUpdateManyWithWhereWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field(() => ActionScheduleScalarWhereInput, { nullable: false })
  where!: ActionScheduleScalarWhereInput;

  @TypeGraphQL.Field(() => ActionScheduleUpdateManyMutationInput, { nullable: false })
  data!: ActionScheduleUpdateManyMutationInput;
}
