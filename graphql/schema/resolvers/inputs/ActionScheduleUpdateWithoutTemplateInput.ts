import * as TypeGraphQL from "type-graphql-v2-fork";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarEventUpdateManyWithoutScheduleInput } from "../inputs/CalendarEventUpdateManyWithoutScheduleInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { HabitUpdateOneRequiredWithoutSchedulesInput } from "../inputs/HabitUpdateOneRequiredWithoutSchedulesInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionScheduleUpdateWithoutTemplateInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateWithoutTemplateInput {
  @TypeGraphQL.Field(() => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  multiplier?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  quantity?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutSchedulesInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutSchedulesInput | undefined;

  @TypeGraphQL.Field(() => CalendarEventUpdateManyWithoutScheduleInput, { nullable: true })
  calendarEvents?: CalendarEventUpdateManyWithoutScheduleInput | undefined;
}
