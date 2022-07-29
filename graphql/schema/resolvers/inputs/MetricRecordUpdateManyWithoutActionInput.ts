import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyActionInputEnvelope } from "../inputs/MetricRecordCreateManyActionInputEnvelope";
import { MetricRecordCreateOrConnectWithoutActionInput } from "../inputs/MetricRecordCreateOrConnectWithoutActionInput";
import { MetricRecordCreateWithoutActionInput } from "../inputs/MetricRecordCreateWithoutActionInput";
import { MetricRecordScalarWhereInput } from "../inputs/MetricRecordScalarWhereInput";
import { MetricRecordUpdateManyWithWhereWithoutActionInput } from "../inputs/MetricRecordUpdateManyWithWhereWithoutActionInput";
import { MetricRecordUpdateWithWhereUniqueWithoutActionInput } from "../inputs/MetricRecordUpdateWithWhereUniqueWithoutActionInput";
import { MetricRecordUpsertWithWhereUniqueWithoutActionInput } from "../inputs/MetricRecordUpsertWithWhereUniqueWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpdateManyWithoutActionInput", {
  isAbstract: true,
})
export class MetricRecordUpdateManyWithoutActionInput {
  @TypeGraphQL.Field((_type) => [MetricRecordCreateWithoutActionInput], { nullable: true })
  create?: MetricRecordCreateWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordCreateOrConnectWithoutActionInput], { nullable: true })
  connectOrCreate?: MetricRecordCreateOrConnectWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordUpsertWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  upsert?: MetricRecordUpsertWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordCreateManyActionInputEnvelope, { nullable: true })
  createMany?: MetricRecordCreateManyActionInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  set?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  disconnect?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  delete?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], { nullable: true })
  connect?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordUpdateWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  update?: MetricRecordUpdateWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordUpdateManyWithWhereWithoutActionInput], {
    nullable: true,
  })
  updateMany?: MetricRecordUpdateManyWithWhereWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordScalarWhereInput], { nullable: true })
  deleteMany?: MetricRecordScalarWhereInput[] | undefined;
}
