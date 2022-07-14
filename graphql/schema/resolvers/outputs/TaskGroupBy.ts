import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { TaskAvgAggregate } from "../outputs/TaskAvgAggregate";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
import { TaskSumAggregate } from "../outputs/TaskSumAggregate";

@TypeGraphQL.ObjectType("TaskGroupBy", {
  isAbstract: true,
})
export class TaskGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  title!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description!: string | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  plannedStartDate!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  dueDate!: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  parentId!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  habitId!: string | null;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  rank!: number;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  completedAt!: Date | null;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt!: Date | null;

  @TypeGraphQL.Field((_type) => TaskCountAggregate, {
    nullable: true,
  })
  _count!: TaskCountAggregate | null;

  @TypeGraphQL.Field((_type) => TaskAvgAggregate, {
    nullable: true,
  })
  _avg!: TaskAvgAggregate | null;

  @TypeGraphQL.Field((_type) => TaskSumAggregate, {
    nullable: true,
  })
  _sum!: TaskSumAggregate | null;

  @TypeGraphQL.Field((_type) => TaskMinAggregate, {
    nullable: true,
  })
  _min!: TaskMinAggregate | null;

  @TypeGraphQL.Field((_type) => TaskMaxAggregate, {
    nullable: true,
  })
  _max!: TaskMaxAggregate | null;
}
