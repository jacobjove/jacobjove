import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("GoalCreateManyHabitInput", { isAbstract: true })
export class GoalCreateManyHabitInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  goalId?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;
}
