import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("GoalCountAggregate", {
  isAbstract: true,
})
export class GoalCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  goalId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
