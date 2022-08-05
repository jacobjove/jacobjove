import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScalarWhereInput } from "../inputs/ActionScalarWhereInput";
import { ActionUpdateManyMutationInput } from "../inputs/ActionUpdateManyMutationInput";

@TypeGraphQL.InputType("ActionUpdateManyWithWhereWithoutHabitInput", { isAbstract: true })
export class ActionUpdateManyWithWhereWithoutHabitInput {
  @TypeGraphQL.Field(() => ActionScalarWhereInput, { nullable: false })
  where!: ActionScalarWhereInput;

  @TypeGraphQL.Field(() => ActionUpdateManyMutationInput, { nullable: false })
  data!: ActionUpdateManyMutationInput;
}
