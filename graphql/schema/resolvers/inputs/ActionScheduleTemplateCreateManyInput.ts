import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateManyInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateManyInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => String, { nullable: false })
  actId!: string;

  @TypeGraphQL.Field(() => String, { nullable: false })
  scheduleTemplateId!: string;

  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;
}
