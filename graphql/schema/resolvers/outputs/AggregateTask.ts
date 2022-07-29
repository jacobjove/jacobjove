import * as TypeGraphQL from "type-graphql-v2-fork";
import { TaskAvgAggregate } from "../outputs/TaskAvgAggregate";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
import { TaskSumAggregate } from "../outputs/TaskSumAggregate";

@TypeGraphQL.ObjectType("AggregateTask", {
  isAbstract: true,
})
export class AggregateTask {
  @TypeGraphQL.Field((_type) => TaskCountAggregate, { nullable: true })
  _count!: TaskCountAggregate | null;

  @TypeGraphQL.Field((_type) => TaskAvgAggregate, { nullable: true })
  _avg!: TaskAvgAggregate | null;

  @TypeGraphQL.Field((_type) => TaskSumAggregate, { nullable: true })
  _sum!: TaskSumAggregate | null;

  @TypeGraphQL.Field((_type) => TaskMinAggregate, { nullable: true })
  _min!: TaskMinAggregate | null;

  @TypeGraphQL.Field((_type) => TaskMaxAggregate, { nullable: true })
  _max!: TaskMaxAggregate | null;
}
