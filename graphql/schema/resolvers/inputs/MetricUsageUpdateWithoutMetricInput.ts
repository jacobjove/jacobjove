import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateOneRequiredWithoutMetricUsagesInput } from "../inputs/HabitUpdateOneRequiredWithoutMetricUsagesInput";
import { MetricRecordUpdateManyWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateManyWithoutMetricUsageInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageUpdateWithoutMetricInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateOneRequiredWithoutMetricUsagesInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordUpdateManyWithoutMetricUsageInput, { nullable: true })
  records?: MetricRecordUpdateManyWithoutMetricUsageInput | undefined;
}
