import * as TypeGraphQL from "type-graphql";
import { MetricApplicationCreateWithoutMetricInput } from "../inputs/MetricApplicationCreateWithoutMetricInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationCreateOrConnectWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationCreateOrConnectWithoutMetricInput {
  @TypeGraphQL.Field((_type) => MetricApplicationWhereUniqueInput, {
    nullable: false,
  })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateWithoutMetricInput, {
    nullable: false,
  })
  create!: MetricApplicationCreateWithoutMetricInput;
}
