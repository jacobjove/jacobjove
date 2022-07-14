import * as TypeGraphQL from "type-graphql";
import { MetricUsageUpdateManyWithoutMetricInput } from "../inputs/MetricUsageUpdateManyWithoutMetricInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricUpdateWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricUpdateWithoutApplicationsInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateManyWithoutMetricInput, {
    nullable: true,
  })
  usages?: MetricUsageUpdateManyWithoutMetricInput | undefined;
}
