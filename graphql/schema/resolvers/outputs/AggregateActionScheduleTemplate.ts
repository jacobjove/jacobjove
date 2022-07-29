import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateAvgAggregate } from "../outputs/ActionScheduleTemplateAvgAggregate";
import { ActionScheduleTemplateCountAggregate } from "../outputs/ActionScheduleTemplateCountAggregate";
import { ActionScheduleTemplateMaxAggregate } from "../outputs/ActionScheduleTemplateMaxAggregate";
import { ActionScheduleTemplateMinAggregate } from "../outputs/ActionScheduleTemplateMinAggregate";
import { ActionScheduleTemplateSumAggregate } from "../outputs/ActionScheduleTemplateSumAggregate";

@TypeGraphQL.ObjectType("AggregateActionScheduleTemplate", {
  isAbstract: true,
})
export class AggregateActionScheduleTemplate {
  @TypeGraphQL.Field(() => ActionScheduleTemplateCountAggregate, { nullable: true })
  _count!: ActionScheduleTemplateCountAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleTemplateAvgAggregate, { nullable: true })
  _avg!: ActionScheduleTemplateAvgAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleTemplateSumAggregate, { nullable: true })
  _sum!: ActionScheduleTemplateSumAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleTemplateMinAggregate, { nullable: true })
  _min!: ActionScheduleTemplateMinAggregate | null;

  @TypeGraphQL.Field(() => ActionScheduleTemplateMaxAggregate, { nullable: true })
  _max!: ActionScheduleTemplateMaxAggregate | null;
}
