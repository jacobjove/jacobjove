import * as TypeGraphQL from "type-graphql";
import { ActionScheduleUpdateManyWithoutTemplateInput } from "../inputs/ActionScheduleUpdateManyWithoutTemplateInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput } from "../inputs/ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateWithoutActInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateWithoutActInput {
  @TypeGraphQL.Field((_type) => EnumFREQUENCYFieldUpdateOperationsInput, {
    nullable: true,
  })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  multiplier?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput,
    {
      nullable: true,
    }
  )
  scheduleTemplate?:
    | ScheduleTemplateUpdateOneRequiredWithoutActionScheduleTemplatesInput
    | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateManyWithoutTemplateInput, {
    nullable: true,
  })
  actionSchedules?: ActionScheduleUpdateManyWithoutTemplateInput | undefined;
}
