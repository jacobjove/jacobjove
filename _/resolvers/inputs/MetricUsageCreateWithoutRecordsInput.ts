import * as TypeGraphQL from "type-graphql-v2-fork";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutMetricUsagesInput } from "../inputs/HabitCreateNestedOneWithoutMetricUsagesInput";
import { MetricCreateNestedOneWithoutUsagesInput } from "../inputs/MetricCreateNestedOneWithoutUsagesInput";

@TypeGraphQL.InputType("MetricUsageCreateWithoutRecordsInput", { isAbstract: true })
export class MetricUsageCreateWithoutRecordsInput {
  @TypeGraphQL.Field(() => String, { nullable: true })
  id?: string | undefined;

  @TypeGraphQL.Field(() => DateTimeScalar, { nullable: true })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field(() => MetricCreateNestedOneWithoutUsagesInput, { nullable: false })
  metric!: MetricCreateNestedOneWithoutUsagesInput;

  @TypeGraphQL.Field(() => HabitCreateNestedOneWithoutMetricUsagesInput, { nullable: false })
  habit!: HabitCreateNestedOneWithoutMetricUsagesInput;
}
