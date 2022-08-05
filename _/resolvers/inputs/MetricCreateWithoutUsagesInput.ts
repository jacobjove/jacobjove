import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateNestedManyWithoutMetricInput } from "../inputs/MetricApplicationCreateNestedManyWithoutMetricInput";

@TypeGraphQL.InputType("MetricCreateWithoutUsagesInput", { isAbstract: true })
export class MetricCreateWithoutUsagesInput {
  @TypeGraphQL.Field(() => String, { nullable: false })
  name!: string;

  @TypeGraphQL.Field(() => MetricApplicationCreateNestedManyWithoutMetricInput, {
    nullable: true,
  })
  applications?: MetricApplicationCreateNestedManyWithoutMetricInput | undefined;
}
