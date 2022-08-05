import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyMetricInputEnvelope } from "../inputs/MetricApplicationCreateManyMetricInputEnvelope";
import { MetricApplicationCreateOrConnectWithoutMetricInput } from "../inputs/MetricApplicationCreateOrConnectWithoutMetricInput";
import { MetricApplicationCreateWithoutMetricInput } from "../inputs/MetricApplicationCreateWithoutMetricInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationCreateNestedManyWithoutMetricInput", { isAbstract: true })
export class MetricApplicationCreateNestedManyWithoutMetricInput {
  @TypeGraphQL.Field(() => [MetricApplicationCreateWithoutMetricInput], { nullable: true })
  create?: MetricApplicationCreateWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationCreateOrConnectWithoutMetricInput], {
    nullable: true,
  })
  connectOrCreate?: MetricApplicationCreateOrConnectWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => MetricApplicationCreateManyMetricInputEnvelope, { nullable: true })
  createMany?: MetricApplicationCreateManyMetricInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  connect?: MetricApplicationWhereUniqueInput[] | undefined;
}
