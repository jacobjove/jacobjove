import * as TypeGraphQL from "type-graphql-v2-fork";
import { CalendarEventUpdateManyWithoutScheduleInput } from "../inputs/CalendarEventUpdateManyWithoutScheduleInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { HabitUpdateOneRequiredWithoutSchedulesInput } from "../inputs/HabitUpdateOneRequiredWithoutSchedulesInput";

@TypeGraphQL.InputType("ActionScheduleUpdateWithoutTemplateInput", { isAbstract: true })
export class ActionScheduleUpdateWithoutTemplateInput {
  @TypeGraphQL.Field(() => EnumFREQUENCYFieldUpdateOperationsInput, { nullable: true })
  frequency?: EnumFREQUENCYFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  multiplier?: number | undefined;

  @TypeGraphQL.Field(() => TypeGraphQL.Int, { nullable: true })
  quantity?: number | undefined;

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  active?: boolean | undefined;

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
