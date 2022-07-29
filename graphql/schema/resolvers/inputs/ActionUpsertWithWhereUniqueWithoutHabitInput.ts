import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateWithoutHabitInput } from "../inputs/ActionCreateWithoutHabitInput";
import { ActionUpdateWithoutHabitInput } from "../inputs/ActionUpdateWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionUpsertWithWhereUniqueWithoutHabitInput", {
  isAbstract: true,
})
export class ActionUpsertWithWhereUniqueWithoutHabitInput {
  @TypeGraphQL.Field(() => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field(() => ActionUpdateWithoutHabitInput, { nullable: false })
  update!: ActionUpdateWithoutHabitInput;

  @TypeGraphQL.Field(() => ActionCreateWithoutHabitInput, { nullable: false })
  create!: ActionCreateWithoutHabitInput;
}
