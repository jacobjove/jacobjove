import * as TypeGraphQL from "type-graphql";
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
  @TypeGraphQL.Field((_type) => [MetricApplicationCreateWithoutMetricInput], {
    nullable: true,
  })
  create?: MetricApplicationCreateWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationCreateOrConnectWithoutMetricInput], {
    nullable: true,
  })
  connectOrCreate?: MetricApplicationCreateOrConnectWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationUpsertWithWhereUniqueWithoutMetricInput], {
    nullable: true,
  })
  upsert?: MetricApplicationUpsertWithWhereUniqueWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricApplicationCreateManyMetricInputEnvelope, {
    nullable: true,
  })
  createMany?: MetricApplicationCreateManyMetricInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  set?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  delete?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationWhereUniqueInput], {
    nullable: true,
  })
  connect?: MetricApplicationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationUpdateWithWhereUniqueWithoutMetricInput], {
    nullable: true,
  })
  update?: MetricApplicationUpdateWithWhereUniqueWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationUpdateManyWithWhereWithoutMetricInput], {
    nullable: true,
  })
  updateMany?: MetricApplicationUpdateManyWithWhereWithoutMetricInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricApplicationScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: MetricApplicationScalarWhereInput[] | undefined;
}
