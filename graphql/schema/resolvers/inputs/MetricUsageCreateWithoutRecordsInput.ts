import * as TypeGraphQL from "type-graphql";
import { DateTimeScalar } from "../../scalars";
import { HabitCreateNestedOneWithoutMetricUsagesInput } from "../inputs/HabitCreateNestedOneWithoutMetricUsagesInput";
import { MetricCreateNestedOneWithoutUsagesInput } from "../inputs/MetricCreateNestedOneWithoutUsagesInput";

@TypeGraphQL.InputType("MetricUsageCreateWithoutRecordsInput", {
  isAbstract: true,
})
export class MetricUsageCreateWithoutRecordsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => DateTimeScalar, {
    nullable: true,
  })
  archivedAt?: Date | null | undefined;

  @TypeGraphQL.Field((_type) => MetricCreateNestedOneWithoutUsagesInput, {
    nullable: false,
  })
  metric!: MetricCreateNestedOneWithoutUsagesInput;

  @TypeGraphQL.Field((_type) => HabitCreateNestedOneWithoutMetricUsagesInput, {
    nullable: false,
  })
  habit!: HabitCreateNestedOneWithoutMetricUsagesInput;
}
