import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateWithoutActionInput } from "../inputs/MetricRecordCreateWithoutActionInput";
import { MetricRecordWhereUniqueInput } from "../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.InputType("MetricRecordCreateOrConnectWithoutActionInput", {
  isAbstract: true,
})
export class MetricRecordCreateOrConnectWithoutActionInput {
  @TypeGraphQL.Field(() => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;

  @TypeGraphQL.Field(() => MetricRecordCreateWithoutActionInput, { nullable: false })
  create!: MetricRecordCreateWithoutActionInput;
}
