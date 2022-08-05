import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput } from "../inputs/ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput";

@TypeGraphQL.InputType("ActionScheduleTemplateWhereUniqueInput", { isAbstract: true })
export class ActionScheduleTemplateWhereUniqueInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput, {
    nullable: true,
  })
  actId_frequency_multiplier?:
    | ActionScheduleTemplateActIdFrequencyMultiplierCompoundUniqueInput
    | undefined;
}
