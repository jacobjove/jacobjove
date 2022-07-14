import * as TypeGraphQL from "type-graphql";
import { MetricRecordCreateManyActionInputEnvelope } from "../inputs/MetricRecordCreateManyActionInputEnvelope";
import { MetricRecordCreateOrConnectWithoutActionInput } from "../inputs/MetricRecordCreateOrConnectWithoutActionInput";
import { MetricRecordCreateWithoutActionInput } from "../inputs/MetricRecordCreateWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateNestedManyWithoutActionInput", {
  isAbstract: true,
})
export class MetricRecordCreateNestedManyWithoutActionInput {
  @TypeGraphQL.Field((_type) => [MetricRecordCreateWithoutActionInput], {
    nullable: true,
  })
  create?: MetricRecordCreateWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordCreateOrConnectWithoutActionInput], {
    nullable: true,
  })
  connectOrCreate?: MetricRecordCreateOrConnectWithoutActionInput[] | undefined;

  @TypeGraphQL.Field((_type) => MetricRecordCreateManyActionInputEnvelope, {
    nullable: true,
  })
  createMany?: MetricRecordCreateManyActionInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [MetricRecordWhereUniqueInput], {
    nullable: true,
  })
  connect?: MetricRecordWhereUniqueInput[] | undefined;
}
