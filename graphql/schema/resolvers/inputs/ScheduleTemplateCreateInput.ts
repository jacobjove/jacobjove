import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ActionScheduleTemplateCreateNestedManyWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateCreateNestedManyWithoutScheduleTemplateInput";

@TypeGraphQL.InputType("ScheduleTemplateCreateInput", {
  isAbstract: true,
})
export class ScheduleTemplateCreateInput {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => String, { nullable: true })
  chron?: string | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateCreateNestedManyWithoutScheduleTemplateInput, {
    nullable: true,
  })
  actionScheduleTemplates?:
    | ActionScheduleTemplateCreateNestedManyWithoutScheduleTemplateInput
    | undefined;
}
