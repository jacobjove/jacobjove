import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateManyWithoutTemplateInput } from "../inputs/ActionScheduleUpdateManyWithoutTemplateInput";
import { ActUpdateOneRequiredWithoutScheduleTemplatesInput } from "../inputs/ActUpdateOneRequiredWithoutScheduleTemplatesInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateInput", { isAbstract: true })
export class ActionScheduleTemplateUpdateInput {
  @TypeGraphQL.Field(() => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => ActUpdateOneRequiredWithoutScheduleTemplatesInput, {
    nullable: true,
  })
  act?: ActUpdateOneRequiredWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field(() => ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput, {
    nullable: true,
  })
  scheduleTemplate?:
    | ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput
    | undefined;

  @TypeGraphQL.Field(() => ActionScheduleUpdateManyWithoutTemplateInput, { nullable: true })
  actionSchedules?: ActionScheduleUpdateManyWithoutTemplateInput | undefined;
}
