import * as TypeGraphQL from "type-graphql-v2-fork";
import { NotebookAvgAggregate } from "../outputs/NotebookAvgAggregate";
import { NotebookCountAggregate } from "../outputs/NotebookCountAggregate";
import { NotebookMaxAggregate } from "../outputs/NotebookMaxAggregate";
import { NotebookMinAggregate } from "../outputs/NotebookMinAggregate";
import { NotebookSumAggregate } from "../outputs/NotebookSumAggregate";

@TypeGraphQL.ObjectType("AggregateNotebook", {
  isAbstract: true,
})
export class AggregateNotebook {
  @TypeGraphQL.Field((_type) => NotebookCountAggregate, { nullable: true })
  _count!: NotebookCountAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookAvgAggregate, { nullable: true })
  _avg!: NotebookAvgAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookSumAggregate, { nullable: true })
  _sum!: NotebookSumAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookMinAggregate, { nullable: true })
  _min!: NotebookMinAggregate | null;

  @TypeGraphQL.Field((_type) => NotebookMaxAggregate, { nullable: true })
  _max!: NotebookMaxAggregate | null;
}
