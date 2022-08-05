import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyMetricInput } from "../inputs/MetricApplicationCreateManyMetricInput";

@TypeGraphQL.InputType("MetricApplicationCreateManyMetricInputEnvelope", { isAbstract: true })
export class MetricApplicationCreateManyMetricInputEnvelope {
  @TypeGraphQL.Field(() => [MetricApplicationCreateManyMetricInput], { nullable: false })
  data!: MetricApplicationCreateManyMetricInput[];

  @TypeGraphQL.Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean | undefined;
}
