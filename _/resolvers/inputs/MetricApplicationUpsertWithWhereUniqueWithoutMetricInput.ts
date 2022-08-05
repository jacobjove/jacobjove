import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateWithoutMetricInput } from "../inputs/MetricApplicationCreateWithoutMetricInput";
import { MetricApplicationUpdateWithoutMetricInput } from "../inputs/MetricApplicationUpdateWithoutMetricInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationUpsertWithWhereUniqueWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationUpsertWithWhereUniqueWithoutMetricInput {
  @TypeGraphQL.Field(() => MetricApplicationWhereUniqueInput, { nullable: false })
  where!: MetricApplicationWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricApplicationUpdateWithoutMetricInput, { nullable: false })
  update!: MetricApplicationUpdateWithoutMetricInput;

  @TypeGraphQL.Field(() => MetricApplicationCreateWithoutMetricInput, { nullable: false })
  create!: MetricApplicationCreateWithoutMetricInput;
}
