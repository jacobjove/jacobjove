import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionAvgAggregate } from "../outputs/ActionAvgAggregate";
import { ActionCountAggregate } from "../outputs/ActionCountAggregate";
import { ActionMaxAggregate } from "../outputs/ActionMaxAggregate";
import { ActionMinAggregate } from "../outputs/ActionMinAggregate";
import { ActionSumAggregate } from "../outputs/ActionSumAggregate";

@TypeGraphQL.ObjectType("AggregateAction", {
  isAbstract: true,
})
export class AggregateAction {
  @TypeGraphQL.Field(() => ActionCountAggregate, { nullable: true })
  _count!: ActionCountAggregate | null;

  @TypeGraphQL.Field(() => ActionAvgAggregate, { nullable: true })
  _avg!: ActionAvgAggregate | null;

  @TypeGraphQL.Field(() => ActionSumAggregate, { nullable: true })
  _sum!: ActionSumAggregate | null;

  @TypeGraphQL.Field(() => ActionMinAggregate, { nullable: true })
  _min!: ActionMinAggregate | null;

  @TypeGraphQL.Field(() => ActionMaxAggregate, { nullable: true })
  _max!: ActionMaxAggregate | null;
}
