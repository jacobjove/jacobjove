import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyMetricUsageInput } from "../inputs/MetricRecordCreateManyMetricUsageInput";

@TypeGraphQL.InputType("MetricRecordCreateManyMetricUsageInputEnvelope", { isAbstract: true })
export class MetricRecordCreateManyMetricUsageInputEnvelope {
  @TypeGraphQL.Field(() => [MetricRecordCreateManyMetricUsageInput], { nullable: false })
  data!: MetricRecordCreateManyMetricUsageInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
