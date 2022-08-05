import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyActionInputEnvelope } from "../inputs/MetricRecordCreateManyActionInputEnvelope";
import { MetricRecordCreateOrConnectWithoutActionInput } from "../inputs/MetricRecordCreateOrConnectWithoutActionInput";
import { MetricRecordCreateWithoutActionInput } from "../inputs/MetricRecordCreateWithoutActionInput";
import { MetricRecordScalarWhereInput } from "../inputs/MetricRecordScalarWhereInput";
import { MetricRecordUpdateManyWithWhereWithoutActionInput } from "../inputs/MetricRecordUpdateManyWithWhereWithoutActionInput";
import { MetricRecordUpdateWithWhereUniqueWithoutActionInput } from "../inputs/MetricRecordUpdateWithWhereUniqueWithoutActionInput";
import { MetricRecordUpsertWithWhereUniqueWithoutActionInput } from "../inputs/MetricRecordUpsertWithWhereUniqueWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordUpdateManyWithoutActionInput", { isAbstract: true })
export class MetricRecordUpdateManyWithoutActionInput {
  @TypeGraphQL.Field(() => [MetricRecordCreateWithoutActionInput], { nullable: true })
  create?: MetricRecordCreateWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordCreateOrConnectWithoutActionInput], { nullable: true })
  connectOrCreate?: MetricRecordCreateOrConnectWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordUpsertWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  upsert?: MetricRecordUpsertWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => MetricRecordCreateManyActionInputEnvelope, { nullable: true })
  createMany?: MetricRecordCreateManyActionInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereUniqueInput], { nullable: true })
  set?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereUniqueInput], { nullable: true })
  disconnect?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereUniqueInput], { nullable: true })
  delete?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereUniqueInput], { nullable: true })
  connect?: MetricRecordWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordUpdateWithWhereUniqueWithoutActionInput], {
    nullable: true,
  })
  update?: MetricRecordUpdateWithWhereUniqueWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordUpdateManyWithWhereWithoutActionInput], {
    nullable: true,
  })
  updateMany?: MetricRecordUpdateManyWithWhereWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordScalarWhereInput], { nullable: true })
  deleteMany?: MetricRecordScalarWhereInput[] | undefined;
}
