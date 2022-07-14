import * as TypeGraphQL from "type-graphql";
import { HabitUpdateOneRequiredWithoutMetricUsagesInput } from "../inputs/HabitUpdateOneRequiredWithoutMetricUsagesInput";
import { MetricRecordUpdateManyWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateManyWithoutMetricUsageInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageUpdateWithoutMetricInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateOneRequiredWithoutMetricUsagesInput, {
    nullable: true,
  })
  habit?: HabitUpdateOneRequiredWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateManyWithoutMetricUsageInput, {
    nullable: true,
  })
  records?: MetricRecordUpdateManyWithoutMetricUsageInput | undefined;
}
