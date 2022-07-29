import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageUpdateManyWithoutMetricInput } from "../inputs/MetricUsageUpdateManyWithoutMetricInput";

@TypeGraphQL.InputType("MetricUpdateWithoutApplicationsInput", {
  isAbstract: true,
})
export class MetricUpdateWithoutApplicationsInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageUpdateManyWithoutMetricInput, { nullable: true })
  usages?: MetricUsageUpdateManyWithoutMetricInput | undefined;
}
