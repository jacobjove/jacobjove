import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ScheduleTemplateAvgAggregate } from "../outputs/ScheduleTemplateAvgAggregate";
import { ScheduleTemplateCountAggregate } from "../outputs/ScheduleTemplateCountAggregate";
import { ScheduleTemplateMaxAggregate } from "../outputs/ScheduleTemplateMaxAggregate";
import { ScheduleTemplateMinAggregate } from "../outputs/ScheduleTemplateMinAggregate";
import { ScheduleTemplateSumAggregate } from "../outputs/ScheduleTemplateSumAggregate";

@TypeGraphQL.ObjectType("ScheduleTemplateGroupBy", {
  isAbstract: true,
})
export class ScheduleTemplateGroupBy {
  @TypeGraphQL.Field((_type) => String, { nullable: false })
  id!: string;

  @TypeGraphQL.Field((_type) => FREQUENCY, { nullable: false })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field((_type) => String, { nullable: true })
  chron!: string | null;

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
