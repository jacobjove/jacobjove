import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("TaskAvgAggregate", {
  isAbstract: true,
})
export class TaskAvgAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  parentId!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Float, { nullable: true })
  rank!: number | null;
}
