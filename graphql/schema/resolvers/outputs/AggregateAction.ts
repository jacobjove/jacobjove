import * as TypeGraphQL from "type-graphql";
import { ActionAvgAggregate } from "../outputs/ActionAvgAggregate";
import { ActionCountAggregate } from "../outputs/ActionCountAggregate";
import { ActionMaxAggregate } from "../outputs/ActionMaxAggregate";
import { ActionMinAggregate } from "../outputs/ActionMinAggregate";
import { ActionSumAggregate } from "../outputs/ActionSumAggregate";

@TypeGraphQL.ObjectType("AggregateAction", {
  isAbstract: true,
})
export class AggregateAction {
  @TypeGraphQL.Field((_type) => ActionCountAggregate, {
    nullable: true,
  })
  _count!: ActionCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActionAvgAggregate, {
    nullable: true,
  })
  _avg!: ActionAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ActionSumAggregate, {
    nullable: true,
  })
  _sum!: ActionSumAggregate | null;

  @TypeGraphQL.Field((_type) => ActionMinAggregate, {
    nullable: true,
  })
  _min!: ActionMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActionMaxAggregate, {
    nullable: true,
  })
  _max!: ActionMaxAggregate | null;
}
