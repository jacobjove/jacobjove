import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { MetricCreateNestedOneWithoutUsagesInput } from "../inputs/MetricCreateNestedOneWithoutUsagesInput";
import { MetricRecordCreateNestedManyWithoutMetricUsageInput } from "../inputs/MetricRecordCreateNestedManyWithoutMetricUsageInput";

@TypeGraphQL.InputType("MetricUsageCreateWithoutHabitInput", { isAbstract: true })
export class MetricUsageCreateWithoutHabitInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricCreateNestedOneWithoutUsagesInput, { nullable: false })
  metric!: MetricCreateNestedOneWithoutUsagesInput;

  @TypeGraphQL.Field(() => MetricRecordCreateNestedManyWithoutMetricUsageInput, {
    nullable: true,
  })
  records?: MetricRecordCreateNestedManyWithoutMetricUsageInput | undefined;
}
