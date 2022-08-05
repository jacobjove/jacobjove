import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ScheduleTemplateAvgAggregate } from "../outputs/ScheduleTemplateAvgAggregate";
import { ScheduleTemplateCountAggregate } from "../outputs/ScheduleTemplateCountAggregate";
import { ScheduleTemplateMaxAggregate } from "../outputs/ScheduleTemplateMaxAggregate";
import { ScheduleTemplateMinAggregate } from "../outputs/ScheduleTemplateMinAggregate";
import { ScheduleTemplateSumAggregate } from "../outputs/ScheduleTemplateSumAggregate";

@TypeGraphQL.ObjectType("ScheduleTemplateGroupBy", { isAbstract: true })
export class ScheduleTemplateGroupBy {
  @TypeGraphQL.Field(() => String, { nullable: false })
  _id!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: false })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: false })
  multiplier!: number;

  @TypeGraphQL.Field(() => String, { nullable: true })
  chron!: string | null;

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
