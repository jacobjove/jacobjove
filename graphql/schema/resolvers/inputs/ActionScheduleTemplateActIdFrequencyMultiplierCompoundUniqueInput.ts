import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  actId!: string;

  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: false,
  })
  frequency!: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR";

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  multiplier!: number;
}
