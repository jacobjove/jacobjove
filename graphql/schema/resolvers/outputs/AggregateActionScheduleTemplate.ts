import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateAvgAggregate } from "../outputs/ActionScheduleTemplateAvgAggregate";
import { ActionScheduleTemplateCountAggregate } from "../outputs/ActionScheduleTemplateCountAggregate";
import { ActionScheduleTemplateMaxAggregate } from "../outputs/ActionScheduleTemplateMaxAggregate";
import { ActionScheduleTemplateMinAggregate } from "../outputs/ActionScheduleTemplateMinAggregate";
import { ActionScheduleTemplateSumAggregate } from "../outputs/ActionScheduleTemplateSumAggregate";

@TypeGraphQL.ObjectType("AggregateActionScheduleTemplate", {
  isAbstract: true,
})
export class AggregateActionScheduleTemplate {
  @TypeGraphQL.Field((_type) => ActionScheduleTemplateCountAggregate, {
    nullable: true,
  })
  _count!: ActionScheduleTemplateCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateAvgAggregate, {
    nullable: true,
  })
  _avg!: ActionScheduleTemplateAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateSumAggregate, {
    nullable: true,
  })
  _sum!: ActionScheduleTemplateSumAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateMinAggregate, {
    nullable: true,
  })
  _min!: ActionScheduleTemplateMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateMaxAggregate, {
    nullable: true,
  })
  _max!: ActionScheduleTemplateMaxAggregate | null;
}
