import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionUpdateOneRequiredWithoutMetricRecordsInput } from "../inputs/ActionUpdateOneRequiredWithoutMetricRecordsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MetricRecordUpdateWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpdateWithoutMetricUsageInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => ActionUpdateOneRequiredWithoutMetricRecordsInput, {
    nullable: true,
  })
  action?: ActionUpdateOneRequiredWithoutMetricRecordsInput | undefined;
}
