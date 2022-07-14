import * as TypeGraphQL from "type-graphql";
import { MetricApplicationCreateManyMetricInput } from "../inputs/MetricApplicationCreateManyMetricInput";

@TypeGraphQL.InputType("MetricApplicationCreateManyMetricInputEnvelope", {
  isAbstract: true,
})
export class MetricApplicationCreateManyMetricInputEnvelope {
  @TypeGraphQL.Field((_type) => [MetricApplicationCreateManyMetricInput], {
    nullable: false,
  })
  data!: MetricApplicationCreateManyMetricInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
