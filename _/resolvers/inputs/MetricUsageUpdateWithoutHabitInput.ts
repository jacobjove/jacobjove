import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordUpdateManyWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateManyWithoutMetricUsageInput";
import { MetricUpdateOneRequiredWithoutUsagesInput } from "../inputs/MetricUpdateOneRequiredWithoutUsagesInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithoutHabitInput", { isAbstract: true })
export class MetricUsageUpdateWithoutHabitInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricUpdateOneRequiredWithoutUsagesInput, { nullable: true })
  metric?: MetricUpdateOneRequiredWithoutUsagesInput | undefined;

  @TypeGraphQL.Field(() => MetricRecordUpdateManyWithoutMetricUsageInput, { nullable: true })
  records?: MetricRecordUpdateManyWithoutMetricUsageInput | undefined;
}
