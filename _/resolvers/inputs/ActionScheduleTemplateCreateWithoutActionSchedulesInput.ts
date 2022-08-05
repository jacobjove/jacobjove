import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ActCreateNestedOneWithoutScheduleTemplatesInput } from "../inputs/ActCreateNestedOneWithoutScheduleTemplatesInput";
import { ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateWithoutActionSchedulesInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateWithoutActionSchedulesInput {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutScheduleTemplatesInput, { nullable: false })
  act!: ActCreateNestedOneWithoutScheduleTemplatesInput;

  @TypeGraphQL.Field(() => ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  scheduleTemplate!: ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput;
}
