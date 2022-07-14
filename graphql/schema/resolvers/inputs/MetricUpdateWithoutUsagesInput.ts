import * as TypeGraphQL from "type-graphql";
import { MetricApplicationUpdateManyWithoutMetricInput } from "../inputs/MetricApplicationUpdateManyWithoutMetricInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricUpdateWithoutUsagesInput", {
  isAbstract: true,
})
export class MetricUpdateWithoutUsagesInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateManyWithoutMetricInput, {
    nullable: true,
  })
  applications?: MetricApplicationUpdateManyWithoutMetricInput | undefined;
}
