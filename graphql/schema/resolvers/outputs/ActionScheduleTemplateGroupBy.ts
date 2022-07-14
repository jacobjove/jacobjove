import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ActionScheduleTemplateAvgAggregate } from "../outputs/ActionScheduleTemplateAvgAggregate";
import { ActionScheduleTemplateCountAggregate } from "../outputs/ActionScheduleTemplateCountAggregate";
import { ActionScheduleTemplateMaxAggregate } from "../outputs/ActionScheduleTemplateMaxAggregate";
import { ActionScheduleTemplateMinAggregate } from "../outputs/ActionScheduleTemplateMinAggregate";
import { ActionScheduleTemplateSumAggregate } from "../outputs/ActionScheduleTemplateSumAggregate";

@TypeGraphQL.ObjectType("ActionScheduleTemplateGroupBy", {
  isAbstract: true,
})
export class ActionScheduleTemplateGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  scheduleTemplateId!: string;

  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: false,
  })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  multiplier!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  quantity!: number;

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
