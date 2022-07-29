import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TaskMaxAggregate", {
  isAbstract: true,
})
export class TaskMaxAggregate {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  title!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  plannedStartDate!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  dueDate!: Date | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  userId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  parentId!: string | null;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  rank!: number | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  completedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  createdAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  updatedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;
}
