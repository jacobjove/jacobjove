import * as TypeGraphQL from "type-graphql";
import { ActUpdateOneRequiredWithoutMetricApplicationsInput } from "../inputs/ActUpdateOneRequiredWithoutMetricApplicationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricApplicationUpdateWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateWithoutMetricInput {
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
}
