import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutMetricUsagesInput } from "../inputs/HabitCreateNestedOneWithoutMetricUsagesInput";
import { MetricRecordCreateNestedManyWithoutMetricUsageInput } from "../inputs/MetricRecordCreateNestedManyWithoutMetricUsageInput";

@TypeGraphQL.InputType("MetricUsageCreateWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageCreateWithoutMetricInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutMetricUsagesInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutMetricUsagesInput;

  @TypeGraphQL.Field(() => MetricRecordCreateNestedManyWithoutMetricUsageInput, {
    nullable: true,
  })
  records?: MetricRecordCreateNestedManyWithoutMetricUsageInput | undefined;
}
