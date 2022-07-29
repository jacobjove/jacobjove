import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateManyMetricInput } from "../inputs/MetricUsageCreateManyMetricInput";

@TypeGraphQL.InputType("MetricUsageCreateManyMetricInputEnvelope", {
  isAbstract: true,
})
export class MetricUsageCreateManyMetricInputEnvelope {
  @TypeGraphQL.Field(() => [MetricUsageCreateManyMetricInput], { nullable: false })
  data!: MetricUsageCreateManyMetricInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
