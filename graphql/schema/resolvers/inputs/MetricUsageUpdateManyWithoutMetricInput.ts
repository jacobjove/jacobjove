import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricUsageCreateManyMetricInputEnvelope } from "../inputs/MetricUsageCreateManyMetricInputEnvelope";
import { MetricUsageCreateOrConnectWithoutMetricInput } from "../inputs/MetricUsageCreateOrConnectWithoutMetricInput";
import { MetricUsageCreateWithoutMetricInput } from "../inputs/MetricUsageCreateWithoutMetricInput";
import { MetricUsageScalarWhereInput } from "../inputs/MetricUsageScalarWhereInput";
import { MetricUsageUpdateManyWithWhereWithoutMetricInput } from "../inputs/MetricUsageUpdateManyWithWhereWithoutMetricInput";
import { MetricUsageUpdateWithWhereUniqueWithoutMetricInput } from "../inputs/MetricUsageUpdateWithWhereUniqueWithoutMetricInput";
import { MetricUsageUpsertWithWhereUniqueWithoutMetricInput } from "../inputs/MetricUsageUpsertWithWhereUniqueWithoutMetricInput";
import { MetricUsageWhereUniqueInput } from "../inputs/MetricUsageWhereUniqueInput";

@TypeGraphQL.InputType("MetricUsageUpdateManyWithoutMetricInput", {
  isAbstract: true,
})
export class MetricUsageUpdateManyWithoutMetricInput {
  @TypeGraphQL.Field((_type) => [MetricUsageCreateWithoutMetricInput], { nullable: true })
  create?: MetricUsageCreateWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageCreateOrConnectWithoutMetricInput], { nullable: true })
  connectOrCreate?: MetricUsageCreateOrConnectWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageUpsertWithWhereUniqueWithoutMetricInput], {
    nullable: true,
  })
  upsert?: MetricUsageUpsertWithWhereUniqueWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricUsageCreateManyMetricInputEnvelope, { nullable: true })
  createMany?: MetricUsageCreateManyMetricInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  set?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  disconnect?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  delete?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageWhereUniqueInput], { nullable: true })
  connect?: MetricUsageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageUpdateWithWhereUniqueWithoutMetricInput], {
    nullable: true,
  })
  update?: MetricUsageUpdateWithWhereUniqueWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageUpdateManyWithWhereWithoutMetricInput], {
    nullable: true,
  })
  updateMany?: MetricUsageUpdateManyWithWhereWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricUsageScalarWhereInput], { nullable: true })
  deleteMany?: MetricUsageScalarWhereInput[] | undefined;
}
