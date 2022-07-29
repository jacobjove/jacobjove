import * as TypeGraphQL from "type-graphql-v2-fork";
import { HabitUpdateOneRequiredWithoutMetricUsagesInput } from "../inputs/HabitUpdateOneRequiredWithoutMetricUsagesInput";
import { MetricUpdateOneRequiredWithoutUsagesInput } from "../inputs/MetricUpdateOneRequiredWithoutUsagesInput";

@TypeGraphQL.InputType("MetricUsageUpdateWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageUpdateWithoutRecordsInput {
  @TypeGraphQL.Field({ nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => MetricUpdateOneRequiredWithoutUsagesInput, { nullable: true })
  metric?: MetricUpdateOneRequiredWithoutUsagesInput | undefined;

  @TypeGraphQL.Field((_type) => HabitUpdateOneRequiredWithoutMetricUsagesInput, { nullable: true })
  habit?: HabitUpdateOneRequiredWithoutMetricUsagesInput | undefined;
}
