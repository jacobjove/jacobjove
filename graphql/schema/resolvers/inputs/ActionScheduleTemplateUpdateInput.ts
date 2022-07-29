import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateManyWithoutTemplateInput } from "../inputs/ActionScheduleUpdateManyWithoutTemplateInput";
import { ActUpdateOneRequiredWithoutScheduleTemplatesInput } from "../inputs/ActUpdateOneRequiredWithoutScheduleTemplatesInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateInput {
  @TypeGraphQL.Field(() => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  multiplier?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;

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
