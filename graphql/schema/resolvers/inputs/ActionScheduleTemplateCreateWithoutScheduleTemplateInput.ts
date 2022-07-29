import * as TypeGraphQL from "type-graphql-v2-fork";
import { FREQUENCY } from "../../enums/FREQUENCY";
import { ActCreateNestedOneWithoutScheduleTemplatesInput } from "../inputs/ActCreateNestedOneWithoutScheduleTemplatesInput";
import { ActionScheduleCreateNestedManyWithoutTemplateInput } from "../inputs/ActionScheduleCreateNestedManyWithoutTemplateInput";

@TypeGraphQL.InputType("ActionScheduleTemplateCreateWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateCreateWithoutScheduleTemplateInput {
  @TypeGraphQL.Field((_type) => FREQUENCY, { nullable: true })
  frequency?: "MINUTE" | "HOUR" | "DAY" | "WEEK" | "MONTH" | "YEAR" | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field((_type) => ActCreateNestedOneWithoutScheduleTemplatesInput, {
    nullable: false,
  })
  act!: ActCreateNestedOneWithoutScheduleTemplatesInput;

  @TypeGraphQL.Field((_type) => ActionScheduleCreateNestedManyWithoutTemplateInput, {
    nullable: true,
  })
  actionSchedules?: ActionScheduleCreateNestedManyWithoutTemplateInput | undefined;
}
