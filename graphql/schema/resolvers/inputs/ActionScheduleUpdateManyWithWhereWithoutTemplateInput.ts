import * as TypeGraphQL from "type-graphql";
import { ActionScheduleScalarWhereInput } from "../inputs/ActionScheduleScalarWhereInput";
import { ActionScheduleUpdateManyMutationInput } from "../inputs/ActionScheduleUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionScheduleUpdateManyWithWhereWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateManyWithWhereWithoutTemplateInput {
  @TypeGraphQL.Field((_type) => ActionScheduleScalarWhereInput, {
    nullable: false,
  })
  where!: ActionScheduleScalarWhereInput;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActionScheduleUpdateManyMutationInput;
}
