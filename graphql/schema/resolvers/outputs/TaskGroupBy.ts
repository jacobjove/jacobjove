import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  title!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  description!: string | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  plannedStartDate!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  dueDate!: Date | null;

  @TypeGraphQL.Field(() => String, { nullable: false })
  userId!: string;

  @TypeGraphQL.Field(() => String, { nullable: true })
  parentId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  habitId!: string | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  rank!: number;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  completedAt!: Date | null;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  createdAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: false })
  updatedAt!: Date;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt!: Date | null;

  @TypeGraphQL.Field(() => TaskCountAggregate, { nullable: true })
  _count!: TaskCountAggregate | null;

  @TypeGraphQL.Field(() => TaskAvgAggregate, { nullable: true })
  _avg!: TaskAvgAggregate | null;

  @TypeGraphQL.Field(() => TaskSumAggregate, { nullable: true })
  _sum!: TaskSumAggregate | null;

  @TypeGraphQL.Field(() => TaskMinAggregate, { nullable: true })
  _min!: TaskMinAggregate | null;

  @TypeGraphQL.Field(() => TaskMaxAggregate, { nullable: true })
  _max!: TaskMaxAggregate | null;
}
