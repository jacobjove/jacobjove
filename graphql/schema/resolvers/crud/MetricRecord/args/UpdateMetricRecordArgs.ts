import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordUpdateInput } from "../../../inputs/MetricRecordUpdateInput";
import { MetricRecordWhereUniqueInput } from "../../../inputs/MetricRecordWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordUpdateInput, { nullable: false })
  data!: MetricRecordUpdateInput;

  @TypeGraphQL.Field((_type) => MetricRecordWhereUniqueInput, { nullable: false })
  where!: MetricRecordWhereUniqueInput;
}
