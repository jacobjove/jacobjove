import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.InputType("GoalCreateManyInput", { isAbstract: true })
export class GoalCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  goalId?: string | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;
}
