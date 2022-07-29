import * as TypeGraphQL from "type-graphql-v2-fork";

@TypeGraphQL.ObjectType("TaskCountAggregate", {
  isAbstract: true,
})
export class TaskCountAggregate {
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  title!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  description!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  plannedStartDate!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  dueDate!: number;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  parentId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  habitId!: string;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rank!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  completedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  createdAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  updatedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  archivedAt!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  _all!: number;
}
