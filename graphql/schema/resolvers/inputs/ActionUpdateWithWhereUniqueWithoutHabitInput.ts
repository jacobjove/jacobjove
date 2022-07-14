import * as TypeGraphQL from "type-graphql";
import { ActionUpdateWithoutHabitInput } from "../inputs/ActionUpdateWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpdateWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class ActionUpdateWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionUpdateWithoutHabitInput, {
    nullable: false,
  })
  data!: ActionUpdateWithoutHabitInput;
}
