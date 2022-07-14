import * as TypeGraphQL from "type-graphql";
import { ActUpdateOneRequiredWithoutMetricApplicationsInput } from "../inputs/ActUpdateOneRequiredWithoutMetricApplicationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MetricUpdateOneRequiredWithoutApplicationsInput } from "../inputs/MetricUpdateOneRequiredWithoutApplicationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricApplicationUpdateInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateInput {
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

  @TypeGraphQL.Field((_type) => ActUpdateOneRequiredWithoutMetricApplicationsInput, {
    nullable: true,
  })
  act?: ActUpdateOneRequiredWithoutMetricApplicationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUpdateOneRequiredWithoutApplicationsInput, {
    nullable: true,
  })
  metric?: MetricUpdateOneRequiredWithoutApplicationsInput | undefined;
}
