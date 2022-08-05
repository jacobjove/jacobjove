import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput } from "../inputs/ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput";
import { EnumFREQUENCYFieldUpdateOperationsInput } from "../inputs/EnumFREQUENCYFieldUpdateOperationsInput";
import { HabitUpdateOneRequiredWithoutSchedulesInput } from "../inputs/HabitUpdateOneRequiredWithoutSchedulesInput";

@TypeGraphQL.InputType("ActionScheduleUpdateWithoutCalendarEventsInput", { isAbstract: true })
export class ActionScheduleUpdateWithoutCalendarEventsInput {
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

  @TypeGraphQL.Field(() => ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput, {
    nullable: true,
  })
  template?: ActionScheduleTemplateUpdateOneWithoutActionSchedulesInput | undefined;
}
