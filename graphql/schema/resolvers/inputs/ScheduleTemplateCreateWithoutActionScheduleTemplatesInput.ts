import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("ScheduleTemplateCreateWithoutActionScheduleTemplatesInput", {
  isAbstract: true,
})
export class ScheduleTemplateCreateWithoutActionScheduleTemplatesInput {
  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: true,
  })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  multiplier?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  chron?: string | undefined;
}
