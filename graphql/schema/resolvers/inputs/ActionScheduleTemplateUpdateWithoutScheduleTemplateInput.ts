import * as TypeGraphQL from "type-graphql";
import { ActionScheduleUpdateManyWithoutTemplateInput } from "../inputs/ActionScheduleUpdateManyWithoutTemplateInput";
import { ActUpdateOneRequiredWithoutScheduleTemplatesInput } from "../inputs/ActUpdateOneRequiredWithoutScheduleTemplatesInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateWithoutScheduleTemplateInput {
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

  @TypeGraphQL.Field((_type) => ActUpdateOneRequiredWithoutScheduleTemplatesInput, {
    nullable: true,
  })
  act?: ActUpdateOneRequiredWithoutScheduleTemplatesInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleUpdateManyWithoutTemplateInput, {
    nullable: true,
  })
  actionSchedules?: ActionScheduleUpdateManyWithoutTemplateInput | undefined;
}
