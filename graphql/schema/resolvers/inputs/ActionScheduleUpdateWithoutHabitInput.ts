import * as TypeGraphQL from "type-graphql";
import { ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CalendarEventUpdateManyWithoutScheduleInput } from "../inputs/CalendarEventUpdateManyWithoutScheduleInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActionScheduleUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class ActionScheduleUpdateWithoutHabitInput {
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

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  active?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => CalendarEventUpdateManyWithoutScheduleInput, {
    nullable: true,
  })
  calendarEvents?: CalendarEventUpdateManyWithoutScheduleInput | undefined;

  @TypeGraphQL.Field((_type) => ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput, {
    nullable: true,
  })
  template?: ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput | undefined;
}
