import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateWithoutMetricInput } from "../inputs/MetricApplicationCreateWithoutMetricInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationCreateOrConnectWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationCreateOrConnectWithoutMetricInput {
  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricApplicationCreateWithoutMetricInput, { nullable: false })
  create!: MetricApplicationCreateWithoutMetricInput;
}
