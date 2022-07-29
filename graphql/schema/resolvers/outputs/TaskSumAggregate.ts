import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("TaskSumAggregate", {
  isAbstract: true,
})
export class TaskSumAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  parentId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  rank!: number | null;
}
