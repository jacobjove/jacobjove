import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateNestedManyWithoutMetricInput } from "../inputs/MetricUsageCreateNestedManyWithoutMetricInput";

@TypeGraphQL.InputType("MetricCreateWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricCreateWithoutApplicationsInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => MetricUsageCreateNestedManyWithoutMetricInput, { nullable: true })
  usages?: MetricUsageCreateNestedManyWithoutMetricInput | undefined;
}
