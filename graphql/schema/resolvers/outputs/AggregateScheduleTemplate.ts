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
  @TypeGraphQL.Field((_type) => ScheduleTemplateCountAggregate, { nullable: true })
  _count!: ScheduleTemplateCountAggregate | null;

  @TypeGraphQL.Field((_type) => ScheduleTemplateAvgAggregate, { nullable: true })
  _avg!: ScheduleTemplateAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ScheduleTemplateSumAggregate, { nullable: true })
  _sum!: ScheduleTemplateSumAggregate | null;

  @TypeGraphQL.Field((_type) => ScheduleTemplateMinAggregate, { nullable: true })
  _min!: ScheduleTemplateMinAggregate | null;

  @TypeGraphQL.Field((_type) => ScheduleTemplateMaxAggregate, { nullable: true })
  _max!: ScheduleTemplateMaxAggregate | null;
}
