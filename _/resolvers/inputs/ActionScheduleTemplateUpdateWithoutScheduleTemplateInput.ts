import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleUpdateManyWithoutTemplateInput } from "../inputs/ActionScheduleUpdateManyWithoutTemplateInput";
import { ActUpdateOneRequiredWithoutScheduleTemplatesInput } from "../inputs/ActUpdateOneRequiredWithoutScheduleTemplatesInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionScheduleTemplateUpdateWithoutScheduleTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleTemplateUpdateWithoutScheduleTemplateInput {
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

  @TypeGraphQL.Field(() => ActionScheduleUpdateManyWithoutTemplateInput, { nullable: true })
  actionSchedules?: ActionScheduleUpdateManyWithoutTemplateInput | undefined;
}
