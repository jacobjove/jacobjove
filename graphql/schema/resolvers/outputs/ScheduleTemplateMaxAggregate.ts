import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.ObjectType("ScheduleTemplateMaxAggregate", {
  isAbstract: true,
})
export class ScheduleTemplateMaxAggregate {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id!: string | null;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier!: number | null;

  @TypeGraphQL.Field(() => String, { nullable: true })
  chron!: string | null;
}
