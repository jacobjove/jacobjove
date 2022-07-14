import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ScheduleTemplateUpdateInput", {
  isAbstract: true,
})
export class ScheduleTemplateUpdateInput {
  @TypeGraphQL.Field((_type) => EnumFREQUENCYFieldUpdateOperationsInput, {
    nullable: true,
  })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  multiplier?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  chron?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput, {
    nullable: true,
  })
  actionScheduleTemplates?:
    | ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput
    | undefined;
}
