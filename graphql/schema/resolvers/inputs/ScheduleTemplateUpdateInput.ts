import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput } from "../inputs/ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ScheduleTemplateUpdateInput", {
  isAbstract: true,
})
export class ScheduleTemplateUpdateInput {
  @TypeGraphQL.Field((_type) => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, { nullable: true })
  multiplier?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  chron?: string | null | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput, {
    nullable: true,
  })
  actionScheduleTemplates?:
    | ActionScheduleTemplateUpdateManyWithoutScheduleTemplateInput
    | undefined;
}
