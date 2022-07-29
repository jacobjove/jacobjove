import * as TypeGraphQL from "type-graphql-v2-fork";
import { MetricRecordCreateInput } from "../../../inputs/MetricRecordCreateInput";

@TypeGraphQL.ArgsType()
export class CreateMetricRecordArgs {
  @TypeGraphQL.Field((_type) => MetricRecordCreateInput, { nullable: false })
  data!: MetricRecordCreateInput;
}
