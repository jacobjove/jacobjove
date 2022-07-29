import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyMetricUsageInputEnvelope } from "../inputs/MetricRecordCreateManyMetricUsageInputEnvelope";
import { MetricRecordCreateOrConnectWithoutMetricUsageInput } from "../inputs/MetricRecordCreateOrConnectWithoutMetricUsageInput";
import { MetricRecordCreateWithoutMetricUsageInput } from "../inputs/MetricRecordCreateWithoutMetricUsageInput";
import { MetricRecordScalarWhereInput } from "../inputs/MetricRecordScalarWhereInput";
import { MetricRecordUpdateManyWithWhereWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateManyWithWhereWithoutMetricUsageInput";
import { MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput } from "../inputs/MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput";
import { MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput } from "../inputs/MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpdateManyWithoutMetricUsageInput", {
  isAbstract: true,
})
export class MetricRecordUpdateManyWithoutMetricUsageInput {
  @TypeGraphQL.Field((_type) => [MetricRecordCreateWithoutMetricUsageInput], { nullable: true })
  create?: MetricRecordCreateWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordCreateOrConnectWithoutMetricUsageInput], {
    nullable: true,
  })
  connectOrCreate?: MetricRecordCreateOrConnectWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput], {
    nullable: true,
  })
  upsert?: MetricRecordUpsertWithWhereUniqueWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordCreateManyMetricUsageInputEnvelope, { nullable: true })
  createMany?: MetricRecordCreateManyMetricUsageInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  set?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  disconnect?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  delete?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  connect?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput], {
    nullable: true,
  })
  update?: MetricRecordUpdateWithWhereUniqueWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordUpdateManyWithWhereWithoutMetricUsageInput], {
    nullable: true,
  })
  updateMany?: MetricRecordUpdateManyWithWhereWithoutMetricUsageInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereInput], { nullable: true })
  deleteMany?: MetricRecordScalarWhereInput[] | undefined;
}
