import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricApplicationCreateManyMetricInputEnvelope } from "../inputs/MetricApplicationCreateManyMetricInputEnvelope";
import { MetricApplicationCreateOrConnectWithoutMetricInput } from "../inputs/MetricApplicationCreateOrConnectWithoutMetricInput";
import { MetricApplicationCreateWithoutMetricInput } from "../inputs/MetricApplicationCreateWithoutMetricInput";
import { MetricApplicationScalarWhereInput } from "../inputs/MetricApplicationScalarWhereInput";
import { MetricApplicationUpdateManyWithWhereWithoutMetricInput } from "../inputs/MetricApplicationUpdateManyWithWhereWithoutMetricInput";
import { MetricApplicationUpdateWithWhereUniqueWithoutMetricInput } from "../inputs/MetricApplicationUpdateWithWhereUniqueWithoutMetricInput";
import { MetricApplicationUpsertWithWhereUniqueWithoutMetricInput } from "../inputs/MetricApplicationUpsertWithWhereUniqueWithoutMetricInput";
import { MetricApplicationWhereUniqueInput } from "../inputs/MetricApplicationWhereUniqueInput";

@TypeGraphQL.InputType("MetricApplicationUpdateManyWithoutMetricInput", {
  isAbstract: true,
})
export class MetricApplicationUpdateManyWithoutMetricInput {
  @TypeGraphQL.Field(() => [MetricApplicationCreateWithoutMetricInput], { nullable: true })
  create?: MetricApplicationCreateWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationCreateOrConnectWithoutMetricInput], {
    nullable: true,
  })
  connectOrCreate?: MetricApplicationCreateOrConnectWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationUpsertWithWhereUniqueWithoutMetricInput], {
    nullable: true,
  })
  upsert?: MetricApplicationUpsertWithWhereUniqueWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => MetricApplicationCreateManyMetricInputEnvelope, { nullable: true })
  createMany?: MetricApplicationCreateManyMetricInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  set?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  disconnect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  delete?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationWhereUniqueInput], { nullable: true })
  connect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationUpdateWithWhereUniqueWithoutMetricInput], {
    nullable: true,
  })
  update?: MetricApplicationUpdateWithWhereUniqueWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationUpdateManyWithWhereWithoutMetricInput], {
    nullable: true,
  })
  updateMany?: MetricApplicationUpdateManyWithWhereWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricApplicationScalarWhereInput], { nullable: true })
  deleteMany?: MetricApplicationScalarWhereInput[] | undefined;
}
