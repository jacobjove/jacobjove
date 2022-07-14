import * as TypeGraphQL from "type-graphql";
import { HabitUpdateOneRequiredWithoutMetricUsagesInput } from "../inputs/HabitUpdateOneRequiredWithoutMetricUsagesInput";
import { MetricRecordUpdateManyWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateManyWithoutMetricUsageInput";
import { MetricUpdateOneRequiredWithoutUsagesInput } from "../inputs/MetricUpdateOneRequiredWithoutUsagesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricUsageUpdateInput", {
  isAbstract: true,
})
export class MetricUsageUpdateInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUpdateOneRequiredWithoutUsagesInput, {
    nullable: true,
  })
  metric?: MetricUpdateOneRequiredWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateOneRequiredWithoutMetricUsagesInput, {
    nullable: true,
  })
  habit?: HabitUpdateOneRequiredWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateManyWithoutMetricUsageInput, {
    nullable: true,
  })
  records?: MetricRecordUpdateManyWithoutMetricUsageInput | undefined;
}
