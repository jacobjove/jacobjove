import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ActCreateNestedOneWithoutScheduleTemplatesInput } from "../inputs/ActCreateNestedOneWithoutScheduleTemplatesInput";
import { ActionScheduleCreateNestedManyWithoutTemplateInput } from "../inputs/ActionScheduleCreateNestedManyWithoutTemplateInput";
import { ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateInput {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => ActCreateNestedOneWithoutScheduleTemplatesInput, {
    nullable: false,
  })
  act!: ActCreateNestedOneWithoutScheduleTemplatesInput;

  @TypeGraphQL.Field(() => ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  scheduleTemplate!: ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateNestedManyWithoutTemplateInput, {
    nullable: true,
  })
  actionSchedules?: ActionScheduleCreateNestedManyWithoutTemplateInput | undefined;
}
