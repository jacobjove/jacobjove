import * as TypeGraphQL from "type-graphql";
import { MetricRecordUpdateManyWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateManyWithoutMetricUsageInput";
import { MetricUpdateOneRequiredWithoutUsagesInput } from "../inputs/MetricUpdateOneRequiredWithoutUsagesInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithoutHabitInput", {
  isAbstract: true,
})
export class MetricUsageUpdateWithoutHabitInput {
  @TypeGraphQL.Field((_type) => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  archivedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUpdateOneRequiredWithoutUsagesInput, {
    nullable: true,
  })
  metric?: MetricUpdateOneRequiredWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateManyWithoutMetricUsageInput, {
    nullable: true,
  })
  records?: MetricRecordUpdateManyWithoutMetricUsageInput | undefined;
}
