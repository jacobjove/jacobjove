import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput } from "../inputs/ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateWhereUniqueInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput, {
    nullable: true,
  })
  actId_frequency_multiplier?:
    | ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput
    | undefined;
}
