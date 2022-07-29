import * as TypeGraphQL from "type-graphql-v2-fork";
import { ActionUpdateOneRequiredWithoutMetricRecordsInput } from "../inputs/ActionUpdateOneRequiredWithoutMetricRecordsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MetricUsageUpdateOneRequiredWithoutRecordsInput } from "../inputs/MetricUsageUpdateOneRequiredWithoutRecordsInput";

@TypeGraphQL.InputType("MetricRecordUpdateInput", {
  isAbstract: true,
})
export class MetricRecordUpdateInput {
  @TypeGraphQL.Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  value?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field({ nullable: true })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricUsageUpdateOneRequiredWithoutRecordsInput, { nullable: true })
  metricUsage?: MetricUsageUpdateOneRequiredWithoutRecordsInput | undefined;

  @TypeGraphQL.Field(() => ActionUpdateOneRequiredWithoutMetricRecordsInput, {
    nullable: true,
  })
  action?: ActionUpdateOneRequiredWithoutMetricRecordsInput | undefined;
}
