import * as TypeGraphQL from "type-graphql";
import { ActionScalarWhereInput } from "../inputs/ActionScalarWhereInput";
import { ActionUpdateManyMutationInput } from "../inputs/ActionUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionUpdateManyWithWhereWithoutHabitInput", {
  isAbstract: true,
})
export class ActionUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field((_type) => ActionScalarWhereInput, {
    nullable: false,
  })
  where!: ActionScalarWhereInput;

  @TypeGraphQL.Field((_type) => ActionUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActionUpdateManyMutationInput;
}
