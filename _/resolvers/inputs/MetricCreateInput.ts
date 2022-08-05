import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateNestedManyWithoutMetricInput } from "../inputs/MetricApplicationCreateNestedManyWithoutMetricInput";
import { MetricUsageCreateNestedManyWithoutMetricInput } from "../inputs/MetricUsageCreateNestedManyWithoutMetricInput";

@TypeGraphQL.InputType("MetricCreateInput", { isAbstract: true })
export class MetricCreateInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => MetricApplicationCreateNestedManyWithoutMetricInput, {
    nullable: true,
  })
  applications?: MetricApplicationCreateNestedManyWithoutMetricInput | undefined;

  @TypeGraphQL.Field(() => MetricUsageCreateNestedManyWithoutMetricInput, { nullable: true })
  usages?: MetricUsageCreateNestedManyWithoutMetricInput | undefined;
}
