import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateManyActionInputEnvelope } from "../inputs/MetricRecordCreateManyActionInputEnvelope";
import { MetricRecordCreateOrConnectWithoutActionInput } from "../inputs/MetricRecordCreateOrConnectWithoutActionInput";
import { MetricRecordCreateWithoutActionInput } from "../inputs/MetricRecordCreateWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateNestedManyWithoutActionInput", {
  isAbstract: true,
})
export class MetricRecordCreateNestedManyWithoutActionInput {
  @TypeGraphQL.Field(() => [MetricRecordCreateWithoutActionInput], { nullable: true })
  create?: MetricRecordCreateWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => [MetricRecordCreateOrConnectWithoutActionInput], { nullable: true })
  connectOrCreate?: MetricRecordCreateOrConnectWithoutActionInput[] | undefined;

  @TypeGraphQL.Field(() => MetricRecordCreateManyActionInputEnvelope, { nullable: true })
  createMany?: MetricRecordCreateManyActionInputEnvelope | undefined;

  @TypeGraphQL.Field(() => [MetricRecordWhereUniqueInput], { nullable: true })
  connect?: MetricRecordWhereUniqueInput[] | undefined;
}
