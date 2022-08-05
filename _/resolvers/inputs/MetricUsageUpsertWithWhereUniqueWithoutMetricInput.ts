import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateWithoutMetricInput } from "../inputs/MetricUsageCreateWithoutMetricInput";
import { MetricUsageUpdateWithoutMetricInput } from "../inputs/MetricUsageUpdateWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpsertWithWhereUniqueWithoutMetricInput", { isAbstract: true })
export class MetricUsageUpsertWithWhereUniqueWithoutMetricInput {
  @TypeGraphQL.Field(() => MetricUsageWhereUniqueInput, { nullable: false })
  where!: MetricUsageWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricUsageUpdateWithoutMetricInput, { nullable: false })
  update!: MetricUsageUpdateWithoutMetricInput;

  @TypeGraphQL.Field(() => MetricUsageCreateWithoutMetricInput, { nullable: false })
  create!: MetricUsageCreateWithoutMetricInput;
}
