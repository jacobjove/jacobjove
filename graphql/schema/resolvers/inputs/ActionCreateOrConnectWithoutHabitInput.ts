import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionCreateWithoutHabitInput } from "../inputs/ActionCreateWithoutHabitInput";
import { ActionWhereUniqueInput } from "../inputs/ActionWhereUniqueInput";

@TypeGraphQL.InputType("ActionCreateOrConnectWithoutHabitInput", {
  isAbstract: true,
})
export class ActionCreateOrConnectWithoutHabitInput {
  @TypeGraphQL.Field((_type) => ActionWhereUniqueInput, { nullable: false })
  where!: ActionWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActionCreateWithoutHabitInput, { nullable: false })
  create!: ActionCreateWithoutHabitInput;
}
