import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("ScheduleTemplateCreateManyInput", {
  isAbstract: true,
})
export class ScheduleTemplateCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  chron?: string | undefined;
}
