import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("GoalCreateManyGoalInput", { isAbstract: true })
export class GoalCreateManyGoalInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;
}
