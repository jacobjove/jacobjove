import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyMetricUsageInput } from "../inputs/MetricRecordCreateManyMetricUsageInput";

@TypeGraphQL.InputType("MetricRecordCreateManyMetricUsageInputEnvelope", {
  isAbstract: true,
})
export class MetricRecordCreateManyMetricUsageInputEnvelope {
  @TypeGraphQL.Field((_type) => [MetricRecordCreateManyMetricUsageInput], { nullable: false })
  data!: MetricRecordCreateManyMetricUsageInput[];

  @TypeGraphQL.Field((_type) => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
