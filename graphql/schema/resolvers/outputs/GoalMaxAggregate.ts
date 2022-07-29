import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("GoalMaxAggregate", {
  isAbstract: true,
})
export class GoalMaxAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  goalId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity!: number | null;
}
