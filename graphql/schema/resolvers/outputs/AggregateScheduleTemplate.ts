import * as TypeGraphQL from "type-graphql-v2-fork";
import { ScheduleTemplateAvgAggregate } from "../outputs/ScheduleTemplateAvgAggregate";
import { ScheduleTemplateCountAggregate } from "../outputs/ScheduleTemplateCountAggregate";
import { ScheduleTemplateMaxAggregate } from "../outputs/ScheduleTemplateMaxAggregate";
import { ScheduleTemplateMinAggregate } from "../outputs/ScheduleTemplateMinAggregate";
import { ScheduleTemplateSumAggregate } from "../outputs/ScheduleTemplateSumAggregate";

@TypeGraphQL.ObjectType("AggregateScheduleTemplate", {
  isAbstract: true,
})
export class AggregateScheduleTemplate {
  @TypeGraphQL.Field(() => ScheduleTemplateCountAggregate, { nullable: true })
  _count!: ScheduleTemplateCountAggregate | null;

  @TypeGraphQL.Field(() => ScheduleTemplateAvgAggregate, { nullable: true })
  _avg!: ScheduleTemplateAvgAggregate | null;

  @TypeGraphQL.Field(() => ScheduleTemplateSumAggregate, { nullable: true })
  _sum!: ScheduleTemplateSumAggregate | null;

  @TypeGraphQL.Field(() => ScheduleTemplateMinAggregate, { nullable: true })
  _min!: ScheduleTemplateMinAggregate | null;

  @TypeGraphQL.Field(() => ScheduleTemplateMaxAggregate, { nullable: true })
  _max!: ScheduleTemplateMaxAggregate | null;
}
