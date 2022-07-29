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
  @TypeGraphQL.Field(() => NotebookCountAggregate, { nullable: true })
  _count!: NotebookCountAggregate | null;

  @TypeGraphQL.Field(() => NotebookAvgAggregate, { nullable: true })
  _avg!: NotebookAvgAggregate | null;

  @TypeGraphQL.Field(() => NotebookSumAggregate, { nullable: true })
  _sum!: NotebookSumAggregate | null;

  @TypeGraphQL.Field(() => NotebookMinAggregate, { nullable: true })
  _min!: NotebookMinAggregate | null;

  @TypeGraphQL.Field(() => NotebookMaxAggregate, { nullable: true })
  _max!: NotebookMaxAggregate | null;
}
