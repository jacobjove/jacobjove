import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.ObjectType("ActionScheduleTemplateMaxAggregate", {
  isAbstract: true,
})
export class ActionScheduleTemplateMaxAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  actId!: string | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  scheduleTemplateId!: string | null;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier!: number | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity!: number | null;
}
