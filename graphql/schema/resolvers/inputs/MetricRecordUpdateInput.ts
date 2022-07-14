import * as TypeGraphQL from "type-graphql";
import { ActionUpdateOneRequiredWithoutMetricRecordsInput } from "../inputs/ActionUpdateOneRequiredWithoutMetricRecordsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MetricUsageUpdateOneRequiredWithoutRecordsInput } from "../inputs/MetricUsageUpdateOneRequiredWithoutRecordsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricRecordUpdateInput", {
  isAbstract: true,
})
export class MetricRecordUpdateInput {
  @TypeGraphQL.Field((_type) => IntFieldUpdateOperationsInput, {
    nullable: true,
  })
  value?: IntFieldUpdateOperationsInput | undefined;

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

  @TypeGraphQL.Field((_type) => MetricUsageUpdateOneRequiredWithoutRecordsInput, {
    nullable: true,
  })
  metricUsage?: MetricUsageUpdateOneRequiredWithoutRecordsInput | undefined;

  @TypeGraphQL.Field((_type) => ActionUpdateOneRequiredWithoutMetricRecordsInput, {
    nullable: true,
  })
  action?: ActionUpdateOneRequiredWithoutMetricRecordsInput | undefined;
}
