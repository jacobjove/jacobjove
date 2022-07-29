import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationUpdateWithoutMetricInput } from "../inputs/MetricApplicationUpdateWithoutMetricInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationUpdateWithWhereUniqueWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateWithWhereUniqueWithoutMetricInput {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateWithoutMetricInput, { nullable: false })
  data!: MetricApplicationUpdateWithoutMetricInput;
}
