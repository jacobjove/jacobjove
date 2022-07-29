import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateOneRequiredWithoutMetricUsagesInput } from "../inputs/HabitUpdateOneRequiredWithoutMetricUsagesInput";
import { MetricRecordUpdateManyWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateManyWithoutMetricUsageInput";
import { MetricUpdateOneRequiredWithoutUsagesInput } from "../inputs/MetricUpdateOneRequiredWithoutUsagesInput";

@TypeGraphQL.InputType("MetricUsageUpdateInput", {
  isAbstract: true,
})
export class MetricUsageUpdateInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricUpdateOneRequiredWithoutUsagesInput, { nullable: true })
  metric?: MetricUpdateOneRequiredWithoutUsagesInput | undefined;

  @TypeGraphQL.Field(() => HabitUpdateOneRequiredWithoutMetricUsagesInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutMetricUsagesInput | undefined;

  @TypeGraphQL.Field(() => MetricRecordUpdateManyWithoutMetricUsageInput, { nullable: true })
  records?: MetricRecordUpdateManyWithoutMetricUsageInput | undefined;
}
