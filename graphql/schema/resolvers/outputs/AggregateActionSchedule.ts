import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleAvgAggregate } from "../outputs/ActionScheduleAvgAggregate";
import { ActionScheduleCountAggregate } from "../outputs/ActionScheduleCountAggregate";
import { ActionScheduleMaxAggregate } from "../outputs/ActionScheduleMaxAggregate";
import { ActionScheduleMinAggregate } from "../outputs/ActionScheduleMinAggregate";
import { ActionScheduleSumAggregate } from "../outputs/ActionScheduleSumAggregate";

@TypeGraphQL.ObjectType("AggregateActionSchedule", {
  isAbstract: true,
})
export class AggregateActionSchedule {
  @TypeGraphQL.Field(() => ActionScheduleCountAggregate, { nullable: true })
  _count!: ActionScheduleCountAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleAvgAggregate, { nullable: true })
  _avg!: ActionScheduleAvgAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleSumAggregate, { nullable: true })
  _sum!: ActionScheduleSumAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleMinAggregate, { nullable: true })
  _min!: ActionScheduleMinAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleMaxAggregate, { nullable: true })
  _max!: ActionScheduleMaxAggregate | null;
}
