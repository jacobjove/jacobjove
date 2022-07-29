import * as TypeGraphQL from "type-graphql-v2-fork";
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
  @TypeGraphQL.Field(() => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  scheduleTemplateId!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  quantity!: number;

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
