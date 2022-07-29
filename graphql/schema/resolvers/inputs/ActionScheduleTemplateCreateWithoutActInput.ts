import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ActionScheduleCreateNestedManyWithoutTemplateInput } from "../inputs/ActionScheduleCreateNestedManyWithoutTemplateInput";
import { ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateWithoutActInput {
  @TypeGraphQL.Field(() => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput, {
    nullable: false,
  })
  scheduleTemplate!: ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput;

  @TypeGraphQL.Field(() => ActionScheduleCreateNestedManyWithoutTemplateInput, {
    nullable: true,
  })
  actionSchedules?: ActionScheduleCreateNestedManyWithoutTemplateInput | undefined;
}
