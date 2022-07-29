import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationUpdateManyWithoutMetricInput } from "../inputs/MetricApplicationUpdateManyWithoutMetricInput";

@TypeGraphQL.InputType("MetricUpdateWithoutUsagesInput", {
  isAbstract: true,
})
export class MetricUpdateWithoutUsagesInput {
  @TypeGraphQL.Field({ nullable: true })
  name?: string | null | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationUpdateManyWithoutMetricInput, { nullable: true })
  applications?: MetricApplicationUpdateManyWithoutMetricInput | undefined;
}
