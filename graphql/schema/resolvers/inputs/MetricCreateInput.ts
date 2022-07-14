import * as TypeGraphQL from "type-graphql";
import { MetricApplicationCreateNestedManyWithoutMetricInput } from "../inputs/MetricApplicationCreateNestedManyWithoutMetricInput";
import { MetricUsageCreateNestedManyWithoutMetricInput } from "../inputs/MetricUsageCreateNestedManyWithoutMetricInput";

@TypeGraphQL.InputType("MetricCreateInput", {
  isAbstract: true,
})
export class MetricCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateNestedManyWithoutMetricInput, {
    nullable: true,
  })
  applications?: MetricApplicationCreateNestedManyWithoutMetricInput | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateNestedManyWithoutMetricInput, {
    nullable: true,
  })
  usages?: MetricUsageCreateNestedManyWithoutMetricInput | undefined;
}
