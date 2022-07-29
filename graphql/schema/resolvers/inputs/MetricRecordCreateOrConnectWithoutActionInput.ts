import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateWithoutActionInput } from "../inputs/MetricRecordCreateWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateOrConnectWithoutActionInput", {
  isAbstract: true,
})
export class MetricRecordCreateOrConnectWithoutActionInput {
  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field((_type) => MetricRecordCreateWithoutActionInput, { nullable: false })
  create!: MetricRecordCreateWithoutActionInput;
}
