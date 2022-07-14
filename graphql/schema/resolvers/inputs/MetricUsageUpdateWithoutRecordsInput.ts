import * as TypeGraphQL from "type-graphql";
import { HabitUpdateOneRequiredWithoutMetricUsagesInput } from "../inputs/HabitUpdateOneRequiredWithoutMetricUsagesInput";
import { MetricUpdateOneRequiredWithoutUsagesInput } from "../inputs/MetricUpdateOneRequiredWithoutUsagesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageUpdateWithoutRecordsInput {
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
}
