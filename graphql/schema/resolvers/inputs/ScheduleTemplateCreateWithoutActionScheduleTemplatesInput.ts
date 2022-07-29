import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("ScheduleTemplateCreateWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateCreateWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  chron?: string | undefined;
}
