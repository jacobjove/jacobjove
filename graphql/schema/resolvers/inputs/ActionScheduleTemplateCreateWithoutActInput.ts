import * as TypeGraphQL from "type-graphql";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ActionScheduleCreateNestedManyWithoutTemplateInput } from "../inputs/ActionScheduleCreateNestedManyWithoutTemplateInput";
import { ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateWithoutActInput {
  @TypeGraphQL.Field((_type) => FREQUENCY, {
    nullable: true,
  })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  multiplier?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  quantity?: number | undefined;

  @TypeGraphQL.Field(
    (_type) => ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput,
    {
      nullable: false,
    }
  )
  scheduleTemplate!: ScheduleTemplateCreateNestedOneWithoutActionScheduleTemplatesInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateNestedManyWithoutTemplateInput, {
    nullable: true,
  })
  actionSchedules?: ActionScheduleCreateNestedManyWithoutTemplateInput | undefined;
}
