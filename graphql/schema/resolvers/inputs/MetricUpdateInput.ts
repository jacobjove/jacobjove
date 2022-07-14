import * as TypeGraphQL from "type-graphql";
import { MetricApplicationUpdateManyWithoutMetricInput } from "../inputs/MetricApplicationUpdateManyWithoutMetricInput";
import { MetricUsageUpdateManyWithoutMetricInput } from "../inputs/MetricUsageUpdateManyWithoutMetricInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricUpdateInput", {
  isAbstract: true,
})
export class MetricUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateManyWithoutMetricInput, {
    nullable: true,
  })
  applications?: MetricApplicationUpdateManyWithoutMetricInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateManyWithoutMetricInput, {
    nullable: true,
  })
  usages?: MetricUsageUpdateManyWithoutMetricInput | undefined;
}
