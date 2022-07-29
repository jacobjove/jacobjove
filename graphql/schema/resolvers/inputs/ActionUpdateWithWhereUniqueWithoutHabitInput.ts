import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionUpdateWithoutHabitInput } from "../inputs/ActionUpdateWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpdateWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class ActionUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionUpdateWithoutHabitInput, { nullable: false })
  data!: ActionUpdateWithoutHabitInput;
}
