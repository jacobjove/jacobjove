import * as TypeGraphQL from "type-graphql";
import { ActionCreateWithoutHabitInput } from "../inputs/ActionCreateWithoutHabitInput";
import { ActionUpdateWithoutHabitInput } from "../inputs/ActionUpdateWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class ActionUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, {
    nullable: false,
  })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionUpdateWithoutHabitInput, {
    nullable: false,
  })
  update!: ActionUpdateWithoutHabitInput;

  @TypeGraphQL.Field((_type) => ActionCreateWithoutHabitInput, {
    nullable: false,
  })
  create!: ActionCreateWithoutHabitInput;
}
