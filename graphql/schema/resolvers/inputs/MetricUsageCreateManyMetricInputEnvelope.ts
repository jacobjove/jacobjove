import * as TypeGraphQL from "type-graphql";
import { MetricUsageCreateManyMetricInput } from "../inputs/MetricUsageCreateManyMetricInput";

@TypeGraphQL.InputType("MetricUsageCreateManyMetricInputEnvelope", {
  isAbstract: true,
})
export class MetricUsageCreateManyMetricInputEnvelope {
  @TypeGraphQL.Field((_type) => [MetricUsageCreateManyMetricInput], {
    nullable: false,
  })
  data!: MetricUsageCreateManyMetricInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
