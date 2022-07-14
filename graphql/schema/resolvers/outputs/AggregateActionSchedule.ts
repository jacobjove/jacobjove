import * as TypeGraphQL from "type-graphql";
import { ActionScheduleAvgAggregate } from "../outputs/ActionScheduleAvgAggregate";
import { ActionScheduleCountAggregate } from "../outputs/ActionScheduleCountAggregate";
import { ActionScheduleMaxAggregate } from "../outputs/ActionScheduleMaxAggregate";
import { ActionScheduleMinAggregate } from "../outputs/ActionScheduleMinAggregate";
import { ActionScheduleSumAggregate } from "../outputs/ActionScheduleSumAggregate";

@TypeGraphQL.ObjectType("AggregateActionSchedule", {
  isAbstract: true,
})
export class AggregateActionSchedule {
  @TypeGraphQL.Field((_type) => ActionScheduleCountAggregate, {
    nullable: true,
  })
  _count!: ActionScheduleCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleAvgAggregate, {
    nullable: true,
  })
  _avg!: ActionScheduleAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleSumAggregate, {
    nullable: true,
  })
  _sum!: ActionScheduleSumAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleMinAggregate, {
    nullable: true,
  })
  _min!: ActionScheduleMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleMaxAggregate, {
    nullable: true,
  })
  _max!: ActionScheduleMaxAggregate | null;
}
