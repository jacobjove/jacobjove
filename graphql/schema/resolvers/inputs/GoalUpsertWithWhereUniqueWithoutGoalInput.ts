import * as TypeGraphQL from "type-graphql";
import { GoalCreateWithoutGoalInput } from "../inputs/GoalCreateWithoutGoalInput";
import { GoalUpdateWithoutGoalInput } from "../inputs/GoalUpdateWithoutGoalInput";
import { GoalWhereUniqueInput } from "../inputs/GoalWhereUniqueInput";

@TypeGraphQL.InputType("GoalUpsertWithWhereUniqueWithoutGoalInput", {
  isAbstract: true,
})
export class GoalUpsertWithWhereUniqueWithoutGoalInput {
  @TypeGraphQL.Field((_type) => GoalWhereUniqueInput, {
    nullable: false,
  })
  where!: GoalWhereUniqueInput;

  @TypeGraphQL.Field((_type) => GoalUpdateWithoutGoalInput, {
    nullable: false,
  })
  update!: GoalUpdateWithoutGoalInput;

  @TypeGraphQL.Field((_type) => GoalCreateWithoutGoalInput, {
    nullable: false,
  })
  create!: GoalCreateWithoutGoalInput;
}
