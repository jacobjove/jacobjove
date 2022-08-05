import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutMetricUsagesInput } from "../inputs/HabitCreateNestedOneWithoutMetricUsagesInput";
import { MetricCreateNestedOneWithoutUsagesInput } from "../inputs/MetricCreateNestedOneWithoutUsagesInput";
import { MetricRecordCreateNestedManyWithoutMetricUsageInput } from "../inputs/MetricRecordCreateNestedManyWithoutMetricUsageInput";

@TypeGraphQL.InputType("MetricUsageCreateInput", { isAbstract: true })
export class MetricUsageCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricCreateNestedOneWithoutUsagesInput, { nullable: false })
  metric!: MetricCreateNestedOneWithoutUsagesInput;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutMetricUsagesInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutMetricUsagesInput;

  @TypeGraphQL.Field(() => MetricRecordCreateNestedManyWithoutMetricUsageInput, {
    nullable: true,
  })
  records?: MetricRecordCreateNestedManyWithoutMetricUsageInput | undefined;
}
